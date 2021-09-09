// 형 변환 (Type conversion)

const a = 1;
const b = "1";

console.log(a === b); // 일치 연산자
console.log(a == b); // 동등 연산자 :: 왠만하면 쓰지마 ::

// Truthy (참 같은 값)
// True, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN(Not a Number)

if (0) {
  console.log(123);
}
