// 문자열 다루기 ( 위치 지정하여 선택하기 )

// 문자열.slice(시작인덱스, 종료인덱스) 종료인덱스는 생략가능
// 문자열.substring(시작인덱스, 종료인덱스) 종료인덱스는 생략가능

const str = "JavaScript";

console.log(str.slice(0, 4));
console.log(str.slice(0));
console.log(str.substring(0, 4));
console.log(str.substring(0));

const str2 = "나의 노트북";
console.log(str2.slice(3, -1));
console.log(str2.slice(-6, -4));

console.log(str2.substring(3, -3));
console.log(str2.substring(-4, -1));
