// 상수 myName에 '사자' eodlq
const myName = "사자";
console.log(myName);

const myString = "사자";
const myFunction = () => console.log("함수 확인");

const change = "자바";
// change = '스크립트'
// 상수는 값 변경이 불가

const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log(sum);

const familyName = "브렌던";
const firstName = "아이크";
const fullName = familyName + firstName;
console.log(fullName);

const a = 1,
  b = 2;
console.log(a + b);

// const로 선언된 배열과 객체 내부의 값은 변경 가능
const myArray = ["펭귄", "고래", "참치"];
myArray[0] = "새우";
console.log(myArray);

const myObject = { id: 20, name: "펭귄" };
myObject.name = "오리";
console.log(myObject);
