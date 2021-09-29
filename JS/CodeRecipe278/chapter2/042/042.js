// 문자열 길이 맞추기
// - 10 미만의 숫자 앞에 0을 붙여 두 자리 형식을 만들고 싶을 때

// 문자열.padStart(전체길이, '추가문자열') 문자열 시작 부분에 문자열 추가
// 문자열.padEnd(전체길이, '추가 문자열') 문자열 끝 부분에 문자열 추가
// 추가문자열을 생략 가능

console.log("5".padStart(2, "0"));
console.log("ff".padEnd(6, "0"));

console.log("123".padStart(3, "0"));
console.log("ff".padStart(6));
