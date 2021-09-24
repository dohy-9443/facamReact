// 지정 문자열 변환하기

// 대상문자열.replace(문자열1, 문자열2) 문자열1을 문자열2로 바꾸기
// 대상문자열.replace(정규표현, 문자열) 정규 표현으로 문자열 바꾸기

// image1.png를 image2.png로 바꿈
const imageName = "image1.png";
console.log(imageName.replace("1.png", "2.png"));

// 문자열 내 줄바꿈 코드를 제거
const inputText = "제이\n-펍";
console.log(inputText.replace("\n", ""));

let phoneNumber = "010-1234-5678";
console.log(phoneNumber.replace("-", ""));
console.log(phoneNumber.replace(/-/g, ""));
// 졍규 표현을 사용하여 g 옵션(문자열 전체 일치 검색)을 지정하면 의도한 작업이 가능
