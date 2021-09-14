// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

import myData from "./myData.json";

console.log(myData);

const user = {
  name: "DongHyun",
  age: 27,
  emails: ["dong944320@gmail.com", "neo@zillinks.com"],
};
console.log("user", user);

const str = JSON.stringify(user);
// javaScript 값이나 객체를 JSON 문자열로 변환
console.log("str", str);
console.log(typeof str);

const obj = JSON.parse(str);
// JSON 문자열의 구문을 분석하고,
// 그 결과에서 JavaScript 값이나 객체를 생성
console.log("obj", obj);
