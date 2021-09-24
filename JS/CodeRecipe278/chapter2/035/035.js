// 문자열 나누기

// 문자열.split(기준문자, 최대분할수) // 지정 범위 내 문자열 반환(두개 다 생략 가능)
// 문자열.split(정규표현, 최대분할수) // 위와 같음

const myUrl = "http://example.com/?id=123456&name=Lion&age=27";
console.log(myUrl.split("&"));

console.log(myUrl.split(/&|\?/));
console.log("JavaScript".split(""));
console.log("JavaScript".split());

// 해시 데이터 보관을 위한 객체
const hashes = {};

// URL의 파라미터를 배열로 가져오기
const parameters = location.search.split(/&|\?/).filter((value) => {
  return value.includes("=");
});

// hashes[key]=value의 형태로 객체에 보관
parameters.forEach((parameter) => {
  // hoge=fuga를 [‘hoge, ’fuga’] 배열로 정리
  const parameterList = parameter.split("=");
  const key = parameterList[0];
  // value를 디코딩하기
  const value = decodeURIComponent(parameterList[1]);

  hashes[key] = value;
});

// 파라미터 데이터 처리

// hashes에 id가 포함된 경우 처리 작업
if (hashes["id"] != null) {
  document.querySelector(".id").innerHTML = hashes["id"];
}

if (hashes["name"] != null) {
  document.querySelector(".name").innerHTML = hashes["name"];
}

if (hashes["age"] != null) {
  document.querySelector(".age").innerHTML = hashes["age"];
}
