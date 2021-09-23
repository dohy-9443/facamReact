// 조건문 사용하기
let myPrice = 100;

myPrice = 20;

myPrice = 1;

if (myPrice >= 50) {
  console.log("myPrice는 50 이상입니다.");
} else if (myPrice >= 10) {
  console.log("myPrice는 10 이상 50 미만입니다.");
} else {
  console.log("myPrice는 10 미만입니다.");
}

if (true) {
  console.log("hello");
}

const randomNum = Math.random() * 10;

if (randomNum >= 5) {
  console.log("randomNum은 5 이상");
} else {
  console.log("randomNum은 5 미만");
}

const randomNum2 = Math.random() * 10;

if (randomNum2 >= 5) console.log("randomNum2은 5 이상");
