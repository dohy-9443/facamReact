// 문자열 검색하기(부분 검색)

const myString = "JavaScript를 배우자";

const a1 = "JavaScript를 배우자".includes("JavaScript"); // 포함 여부 확인
console.log(a1);

const a2 = "JavaScript를 배우자".startsWith("배우자"); // 시작 문자 확인
console.log(a2);

const a3 = "JavaScript를 배우자".endsWith("배우자"); // 종료 문자 확인
console.log(a3);
