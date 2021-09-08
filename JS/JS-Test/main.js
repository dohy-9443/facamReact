// 비교 연산자 (comparison operator)

const a = 3;
const b = 3;

console.log(a === b);

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(a, b));
console.log(isEqual(2, "2"));

console.log(a !== b);
console.log(a <= b);
