// JS 데이터

// String: '', "", ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

const result = "Hello world!";
console.log(result.indexOf("world"));
// indexOf는 일치하는 값이 없으면 -1을 반환
console.log(result.indexOf("false") !== -1);
// -1을 반환해 true지만 !== 때문에 false를 반환
console.log(result.slice(6, 11));
// slice는 (시작index, 끝부분index인데 딱 그 직전까지)
console.log(result.replace("world", "donghyun"));
// replace는 (바꾸고싶은 문자, 교체되는 문자)
console.log(result.replace(" world!", ""));
// replace에 뒤쪽을 빈 문자열로 작성하면 제거된다.

const str = "0123";
console.log(str.length);
// length는 갯수

const eMail = "dong944320@gmail.com";
console.log(eMail.match(/.+(?=@)/)[0]);
// 자세한거는 정규표현식 공부할 때

const trimEx = "      Hello world    ";

console.log(trimEx.trim());
// trim은 앞뒤 공백 제거
