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

const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b);
