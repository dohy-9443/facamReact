const mapContainer = document.querySelector('#map');
const keyword = document.querySelector('#keyword');
const searchBtn = document.querySelector('#search-btn');

const listEl = document.getElementById('placesList');
const menuEl = document.getElementById('menu_wrap');
const fragment = document.createDocumentFragment();

let isFromSection = false;

// 어디를 경유해서 왔는지 판별하는 함수
const isFromWhere = () => {
	location.href.includes('address') ? 
	isFromSection = true 
	: isFromSection = false;
};

// parameter 받아오는 함수
const getParam = (param) => {
	let url = location.href;
	let params = (url.slice(url.indexOf('?') + 1)).split('=');
	let [ variable, value ] = params;
	if(variable.toUpperCase() === param.toUpperCase()) {
		return decodeURIComponent(value);
	} else {
		/* error code 작성 */
		alert('경고!\n올바른 요청이 아닙니다.');
	};
};

// 마커를 담을 배열
let markers = [];

// 지도 옵션 정의
const mapOption = {
  center: new kakao.maps.LatLng(37.55783404454577, 126.96938218152603),
  level: 3,
};

// 지도를 생성
const map = new kakao.maps.Map(mapContainer, mapOption);

// 지정좌표를 중심좌표로 이동
const moveCenter = (locPosition, map) => {
  // Geolocation 좌표로 이동
  map.setCenter(locPosition);
}

// 주소-좌표 변환 객체 생성
const geocoder = new kakao.maps.services.Geocoder();

// 좌표로 행정동 주소를 요청
const searchAddrFromCoords = (lng, lat, callback) => {
  geocoder.coord2Address(lng, lat, callback);
  console.log(geocoder);
}

// 장소 검색 객체를 생성
const place = new kakao.maps.services.Places();

// 장소 검색이 완료되면 호출하는 콜백함수
const placesSearchCB = (data, status, pagination) => {
  if (status === kakao.maps.services.Status.OK) {
    // 첫 번째 데이터를 좌표 생성 및 이동
    let coords = new kakao.maps.LatLng(data[0].y, data[0].x);
    map.setCenter(coords);

    // 검색목록 및 마커 
    displayPlaces(data);

    // pagination 표시
    displayPagination(pagination);

  } else if (status === kakao.maps.services.Status.ZERO_RESULT || status === kakao.map.services.Status.ERROR) {
    // 검색결과 목록에 추가된 항목들을 제거
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커 제거
    removeMarkers();

    let zeroStr = `<span>검색 결과가 없습니다.</span>`;
    const el = document.createElement('li');

    el.innerHTML = zeroStr;
    el.className = 'zero';
    fragment.appendChild(el);
    listEl.appendChild(fragment);

  };
};

// 검색 요청
const searchPlaces = (places, coords) => {
  if (!keyword.value.replace(/^\s+|\s+$/g, '')) {
    alert('검색어를 입력해주세요.');
    return false;
  };

  // 장소검색 객체를 통해 키워드로 장소검색을 요청

  // 검색할 키워드, 검색 결과를 받을 콜백함수 , options
  places.keywordSearch(keyword.value, placesSearchCB, {
    location: coords, // 중심좌표 (나는 검색한거의 첫번째로)
    radius: 1000, // 중심 좌표로부터의 거리(반경)
    size: 10, // 한 페이지에 보여질 목록 개수
    sort: kakao.maps.services.SortBy.DISTANCE,
    // sort는 sortBy까지 와야되는데 그럴라면 kakao.maps.services.SortBy 여기까지 와야한다.
    // DISTANCE는 지정한 좌표값에 기반하여 동작
    useMapBounds: false,
    // 지정한 Map 객체의 영역을 사용할지의 여부 
  });
};

// 검색 버튼
const searchClick = (e) => {
  e.preventDefault();
  if (!keyword.value.replace(/^\s+|\s+$/g, '')) {
    alert('검색어를 입력해주세요.');
    return;
  };

  place.keywordSearch(keyword.value, placesSearchCB);
}

// 검색 결과 목록 및 마커 클릭할 때 장소명을 표출
const infoWindow = new kakao.maps.InfoWindow({
  zIndex: 1, // 인포윈도우 엘리먼트의 zIndex 값
  disableAutoPan: true, // 인포윈도우 열 때 지도가 자동으로 패닝하지 않을지 여부
});

// 검색 결과 목록, 마커를 표출할 함수
const displayPlaces = (places) => {
  // 검색 결과 목록에 추가된 항목을 제거
  removeAllChildNods(listEl);

  // 지도에 표시되고 있는 마커를 제거
  removeMarkers();

  places.map((cur, idx) => {
    // 마커 생성 후 지도에 표시
    let placePosition = new kakao.maps.LatLng(cur.y, cur.x);
    let marker = addMarker(placePosition, idx);

    // 검색 결과 항목 Element 생성
    let itemEl = getListItem(idx, cur);

    // 마커, 검색결과 mouseover , mouseout
    ((marker, title, address, coords) => {
      kakao.maps.event.addListener(marker, 'click', () => {
        infoWindow.close();
        displayInfoWindow(marker, title, address);
        map.setCenter(coords);
      });
    })(marker, cur.place_name, cur.road_address_name, placePosition);
    
    fragment.appendChild(itemEl);
  });

  // 검색결과 항목을 목록 Element로 추가
  listEl.appendChild(fragment);
  menuEl.scrollTop = 0;
}

// 검색결과 항목을 Element로 변환
const getListItem = (index, places) => {
  const el = document.createElement('li');

  let itemStr = `
    <span class="markerbg marker_${index + 1}"></span>
    <div class="info"><h5>${places.place_name}</h5>
  `;

  if (places.road_address_name) {
    itemStr += `
      <span>${places.road_address_name}</span>
      <span class="jibun gray">${places.address_name}</span>
    `;
  } else {
    itemStr += `<span>${places.address_name}</span>`;
  };

  itemStr += `</div>`;

  el.innerHTML = itemStr;
  el.className = 'item';
  
  el.addEventListener('click', () => {
    geocoder.addressSearch(places.road_address_name, (result, status) => {
      
      // 정상적으로 검색이 완료되면 지도 이동
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords);
        keyword.value = `${places.road_address_name}`;
      };
    });
  });

  return el;
};

// 마커를 생성하고 지도에 표시
const addMarker = (position, idx) => {
  // 마커 이미지
  const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
  // 마커 이미지 크기
  const imageSize = new kakao.maps.Size(36, 37);
  const imageOptions =  {
    spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
    spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
  };
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOptions);
  const marker = new kakao.maps.Marker({position: position, image: markerImage});

  marker.setMap(map); // 지도 위에 마커를 표출
  markers.push(marker); // 배열에 생성된 마커를 추가

  return marker;
};

// 지도 위에 마커 모두 제거
const removeMarkers = () => {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  // 배열도 초기화
  markers = [];
};

// 검색 결과 하단 pagination
const displayPagination = (pagination) => {
  const paginationEl = document.getElementById('pagination');
  const fragment = document.createDocumentFragment();

  // 기존 추가된 페이지번호 삭제
  while (paginationEl.hasChildNodes()) {
    paginationEl.removeChild(paginationEl.lastChild);
  };

  for (let i = 1; i <= pagination.last; i++) {
    let el = document.createElement('a');
    el.href = '#';
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = 'on';
    } else {
      el.onclick = ((i) => {
        return () => {
          pagination.gotoPage(i);
          // gotoPage는 저장한 페이지를 검색
        };
      })(i);
    };

    fragment.appendChild(el);
  }

  paginationEl.appendChild(fragment);
}

// 검색결과 목록, 마커 mouseover
const displayInfoWindow = (marker, title, address) => {
  let content = `
    <div class="infoWindow">
      <div class="info-title">
        <p>${title}</p>
      </div>
      <div class="info-content">
        <div>
          <p>${address}</p>
        <div>
        <a href="javascript:void(0)" target="_blank">
          <img src='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png' alt="marker" />
        </a>
      </div>
    </div>
  `;

  infoWindow.setContent(content);
  infoWindow.open(map, marker);
}

// 검색결과 목록의 자식 Element를 제거
const removeAllChildNods = (el) => {
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  };
};

searchBtn.addEventListener('click', searchClick);

window.onload = () => {
  isFromWhere();

	// gnb를 경유해서 넘어온 경우
	if(!isFromSection) {
    // Geolocation 사용 가능여부 확인
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition((position) => {
		    let lat = position.coords.latitude; // 위도
		    let lon = position.coords.longitude; // 경도
		
		    const locPosition = new kakao.maps.LatLng(lat, lon);
		    moveCenter(locPosition, map);
			
		  // 키워드로 장소 검색
		  searchPlaces(place, locPosition);
		  });
		} else {
		  const locPosition = new kakao.maps.LatLng(
		    37.55783404454577, 126.96938218152603
		  );
		  moveCenter(locPosition, map);
		  // 키워드로 장소 검색
		  searchPlaces(place, locPosition);
		};

	} else { // section에서 검색으로 넘어온 경우
    let temp = getParam('address');
    let searchValue = temp + ' 투썸플레이스';
    place.keywordSearch(searchValue, placeSearchCB);
    
    keyword.value = searchValue;
  };
};