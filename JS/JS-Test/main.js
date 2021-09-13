import _ from "lodash";

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: "donghyun",
  age: 27,
  emails: ["dong944320@gamil.com"],
};
const copyUser = _.cloneDeep(user);
console.log(copyUser === user);

user.age = 26;
console.log("user", user);
console.log("copyUser", copyUser);

console.log("---------------");
console.log("---------------");

user.emails.push("dong_hyun95@hanmail.net");
console.log(user.emails === copyUser.emails);
console.log("user", user);
console.log("copyUser", copyUser);
