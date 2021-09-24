// 문자열의 공백 처리하기 (trim)

// 양단에 공백이 있을 때
const targetString1 = "    안녕     ";
const trimmedString1 = targetString1.trim();
console.log(trimmedString1);

// 줄바꿈 문자가 삽입되어 있는 경우
const targetString2 = "사과를 먹었어요.\n";
const trimmedString2 = targetString2.trim();
console.log(trimmedString2);

// 문자열 사이의 공백은 제거되지 않음
const targetString3 = "사과.          귤.             ";
const trimmedString3 = targetString3.trim();
console.log(trimmedString3);
