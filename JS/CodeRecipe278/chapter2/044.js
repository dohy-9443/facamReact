// 문자열 URI 디코드 하기
// 인코딩된 URI 문자열을 디코딩하고 싶을 때

// decodeURI(문자열) 문자열을 디코딩
// decodeURIComponent(문자열) 문자열을 디코딩

console.log(
  decodeURI(
    "http://example.com/%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4%20%ED%8E%98%EC%9D%B4%EC%A7%80.html"
  )
);

console.log(
  decodeURI(
    "http%3A%2F%2Fexample.com%2F%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4%20%ED%8E%98%EC%9D%B4%EC%A7%80.html"
  )
);

console.log(
  decodeURIComponent(
    "http%3A%2F%2Fexample.com%2F%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4%20%ED%8E%98%EC%9D%B4%EC%A7%80.html"
  )
);
