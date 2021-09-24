// 문자열 길이 확인하기

console.log("웹디자인".length);

// 텍스트 영역(textarea)
const textarea = document.querySelector("#textarea");

// 입력 중인 문자 수
const string_num = document.querySelector(".string_num");

// 텍스트를 입력할 때마다 onKeyUp()을 실행
textarea.addEventListener("keyup", onKeyUp);

function onKeyUp() {
  const inputText = textarea.value;

  string_num.innerText = inputText.length;
}
