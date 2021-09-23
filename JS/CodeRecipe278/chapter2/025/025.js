// 삼각 함수 사용하기

console.log(Math.PI);
console.log((90 * Math.PI) / 180);
console.log((90 * Math.PI) / 180);
console.log((45 * Math.PI) / 180);
console.log(1);
console.log((Math.atan2(1, 1) * 180) / Math.PI);

const circle = document.querySelector(".circle");

// 각도
let degree = 0;

// 루프의 개시
loop();

// 화면이 갱신될 때마다 실행되는 함수
function loop() {
  // 회전각을 라디안을 구하기
  const rotation = (degree * Math.PI) / 180;
  // 회전각으로 위치 구하기
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;

  // circle 위치 반영하기
  circle.style.left = `${targetX}px`;
  circle.style.top = `${targetY}px`;

  degree += 1;

  // 다음 화면 갱신 타이밍에서 loop() 실행
  requestAnimationFrame(loop);
}

function randomColor() {
  setInterval(() => {
    // 0 ~ 359 사이 임의의 수를 가져오기

    const randomHue = Math.trunc(Math.random() * 360);
    // 그라데이션의 시작과 끝 색상을 결정
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    circle.style.setProperty("--start", randomColorStart);
    circle.style.setProperty("--end", randomColorEnd);
  }, 1000);
}

randomColor();
