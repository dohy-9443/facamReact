// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7;
function double() {
  console.log(a * 2);
}

double();

(function () {
  console.log(a * 2);
})();
