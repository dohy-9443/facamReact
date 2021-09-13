// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  userName: "donghyun",
  age: 27,
  email: "dong944320@gmail.com",
  address: "USA",
};
const { userName: name, age, email, address = "Korea" } = user;
// 위에 user라는 객체에서 필요한 것을 변수로 만들어가지고
//  꺼내다가 쓰는거

// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`);
console.log(`${name}의 나이는 ${age}세 입니다.`);
console.log(`${name}의 이메일 주소는 ${email}입니다.`);
console.log(address);

const fruits = ["Apple", "Banana", "Cherry"];
const [a, b, c, d] = fruits;
console.log(a, b, c, d);
