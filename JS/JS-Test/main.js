import _ from "lodash";

const usersA = [
  { userId: "1", name: "Donghyun" },
  { userId: "2", name: "Neo" },
];
const usersB = [
  { userId: "1", name: "Donghyun" },
  { userId: "3", name: "Amy" },
];
const usersC = usersA.concat(usersB);
// 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
console.log("concat", usersC);
console.log("uniqBy", _.uniqBy(usersC, "userId"));
// 위아래 둘다 마지막 인자는 고유값으로 쓸거
// 위에꺼는 배열데이터가 하나일 때 쓰는거
// 아래꺼는 여러개일 때 쓰는 거
const usersD = _.unionBy(usersA, usersB, "userId");
console.log("unionBy", usersD);

console.log("--------------------");

const users = [
  { userId: "1", name: "Donghyun" },
  { userId: "2", name: "Neo" },
  { userId: "3", name: "Amy" },
  { userId: "4", name: "Evan" },
  { userId: "5", name: "Lewis" },
];

const foundUser = _.find(users, { name: "Amy" });
const foundUserIndex = _.findIndex(users, { name: "Amy" });
console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, { name: "Donghyun" });
console.log(users);
