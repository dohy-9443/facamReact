// 임의의 수 다루기

console.log(Math.random()); // 0 이상 1 미만 임의의 소수
console.log(Math.floor(Math.random() * 100)); // 0 이상 100 미만 임의의 정수
console.log(10 + Math.floor(Math.random() * 10)); // 10 이상 20 미만 임의의 정수

const rectangle = document.querySelector(".rectangle");

// 버튼 클릭시 onClickButton() 실행
document.querySelector(".button").addEventListener("click", onClickButton);

// 버튼을 누를 때마다 그라데이션 색상을 변경
function onClickButton() {
  // 0 ~ 359 사이 임의의 수를 가져오기
  const randomHue = Math.trunc(Math.random() * 360);
  // 그라데이션의 시작과 끝 색상을 결정
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  rectangle.style.setProperty("--start", randomColorStart);
  rectangle.style.setProperty("--end", randomColorEnd);
}
