// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건;) {}

const ulEl = document.querySelector("ul");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `list-${i}`;
  if (i % 2 === 0) {
    li.addEventListener("click", () => {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}
