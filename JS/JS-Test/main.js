// JS 데이터

// String: '', "", ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

const pi = 3.14159265358979;
console.log(pi);

const str = pi.toFixed(2);
// toFixed(2)는 소수점아래 2자리까지
// (이거 쓰면 문자데이터로 바뀜)
console.log(str);
console.log(typeof str);

const integer = parseInt(str);
// parseInt는 정수형으로 바꿔줌
const float = parseFloat(str);
// parseFloat는 실수형으로 바꿔줌
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

// Math
console.log("abs: ", Math.abs(-12));
// abs 절대값
console.log("min: ", Math.min(2, 8));
// min 최소값
console.log("max: ", Math.max(2, 8));
// max 최대값
console.log("ceil", Math.ceil(3.14));
// ceil 올림
console.log("floor: ", Math.floor(3.14));
// floor 내림
console.log("round: ", Math.round(3.14));
// round 반올림
console.log("random: ", Math.random());
// 0 ~ 1 사이의 랜덤값
