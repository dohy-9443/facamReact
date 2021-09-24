// 문자열 검색하기(인덱스 검색)

const myString = "JavaScript를 배우자";

// 지정 문자열이 존재할 때
const a1 = myString.indexOf("JavaScript");
console.log(a1);

const a2 = myString.indexOf("배우자");
console.log(a2);

const a3 = myString.indexOf("a");
console.log(a3);

// 지정 문자열이 존재하지 않을 때
const b1 = myString.indexOf("HTML");
console.log(b1);

const b2 = myString.indexOf("j");
console.log(b2);

const c1 = myString.indexOf("JavaScript", 4); // 4번부터 읽기 시작함
console.log(c1);
