// 문자열과 식 함께 다루기

// 문자열 + 문자열 + ... 문자열 결합
// `${문자열1}${문자열2}${문자열3}` 문자열 결합, 변수의 이용

const userName = "고양이";

const tag =
  '<div class="container">' + "안녕하세요" + userName + "님" + "</div>";

console.log(tag);

const tag2 = `<div class="container">안녕하세요. ${userName} 님</div>`;

console.log(tag2);

const str2 = `123 x 123은 ${123 * 123} 입니다.`;

console.log(str2);
