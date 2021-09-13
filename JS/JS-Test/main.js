import _ from "lodash"; // From `node_modules`!
import getType from "./getType"; // getType.js
import { random, user as donghyun } from "./getRandom"; // getRandom.js
// 이름을 정해줘야되는 모듈은 꼭 {}를 감싸줘야됌

// user as donghuyn이라고 적으면 user: donghyun 처럼
// user를 불러오는데 donghyun이라는 이름으로 쓸거다 라는 의미

console.log(_.camelCase("the hello world"));
console.log(getType([1, 2, 3]));
console.log(random(), random());
console.log(donghyun);
