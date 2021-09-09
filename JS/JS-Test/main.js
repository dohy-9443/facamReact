// 함수 복습

function sum(x, y) {
  // function sum(매개변수, 매개변수) {}
  return x + y;
}

const a = sum(1, 3); // sum (인수, 인수)
const b = sum(4, 12);

console.log(a);
console.log(b);
console.log(a + b);

console.log(sum(1, 5));
console.log(sum(4, 10));
console.log(sum(1, 5) + sum(4, 10));

// 반복적으로 사용할 거면 변수에 담아놓는 게 좋고
// 단일적으로 한번만 쓸거면 그냥 밑에가 좋다고 한다.
