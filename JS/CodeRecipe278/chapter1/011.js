// 함수

function myFunction(a) {
  const result = a + 2;
  return result;
}

console.log(myFunction(1));

function calcSum(a, b, c) {
  const result = a + b + c;
  return result;
}

console.log(calcSum(1, 2, 3));

function myFunc() {
  console.log("안녕하세요");
  return 100;
}

console.log(myFunc());

function myFunc2() {
  console.log("안녕하세요.");
}

console.log(myFunc2());

function myFunc3() {
  return 100;

  console.log("출력되지 않음");
}

console.log(myFunc3());

function myFunc4(a, b) {
  // a가 100 이상이면 a를 반환
  if (a >= 100) {
    return a;
  }

  // a가 100 미만이면 b를 반환
  return b;
}

console.log(myFunc4(50, "나는 b"));

function calcFunc(price, tax) {
  const result = price + price * tax;
  return result;
}

const myResult = calcFunc(100, 0.1);
console.log(myResult);

function print() {
  console.log("안녕");
}

print();
