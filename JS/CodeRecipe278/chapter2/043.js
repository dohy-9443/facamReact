// 문자열 URI 이스케이프 처리하기
// - URI의 한글을 인코딩할 때
// - SNS의 한글을 인코딩 후 URL로 변환하고 싶을 때

// encodeURI(문자열) 문자열을 인코딩
// encodeURIComponent(문자열) 문자열을 인코딩

console.log(encodeURI("http://example.com/귀여운 고양이 페이지.html"));
console.log(encodeURIComponent("http://example.com/귀여운 고양이 페이지.html"));
