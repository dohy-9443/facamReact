// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: "donghyun",
  age: 27,
  emails: ["dong944320@gamil.com"],
};
const copyUser = user;
console.log(copyUser === user);

user.age = 26;
console.log("user", user);
console.log("copyUser", copyUser);

console.log("---------------");
console.log("---------------");
console.log(copyUser === user);
