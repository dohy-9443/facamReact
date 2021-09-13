// JS 데이터

// String: '', "", ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

const userAge = {
  // key: value
  name: "donghyun",
  age: 27,
};
const userEmail = {
  name: "donghyun",
  email: "dong944320@gmail,com",
};

// .assign()
// 하나 이상의 원본 객체들로부터
// 모든 열거가능한 속성들을 대상 객체로 복사
const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b);

const user = {
  name: "donghyun",
  age: 27,
  email: "dong944320@gmail.com",
};

const keys = Object.keys(user);
console.log(keys);
// ['name', 'age', 'email']

console.log(user["email"]);

const values = keys.map((key) => user[key]);
console.log(values);
