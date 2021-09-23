// 진위 여부 판별하기
const a = 10;
const b = 20;

console.log(a < b);
console.log(a > b);

// iOS 여부 확인
// const isIOs = navigator.userAgent.includes("iPhone");

// if (isIOs) {
// iOS용 처리 작업
// }

// '안녕하세요. 제이펍' 콘솔창 표시
const userName = "제이펍";
if (userName) {
  console.log(`안녕하세요. ${userName}`);
}

// address가 ''이므로 콘솔에 표시하지 않음
const address = "";
if (address) {
  console.log(`당신은 ${address}에 살고 계시네요.`);
}

// 진리 값에 '!'를 붙이면 반대의 값을 가진다.

// JavaScript 문자열의 'a' 문자 포함 여부
const flg = "JavaScript".includes("a");

console.log(!flg);

// 다른 타입의 값에 붙이면 값이 참 혹은 거짓으로 변환된다.
console.log(!"제이펍");
console.log(!24);
console.log(![1, 2, 3]);

// '!'를 두 번 사용하면 데이터의 타입이 Boolean으로 변환된다.
console.log(!!"제이펍");
console.log(!!22);
console.log(!![1, 2, 3]);
