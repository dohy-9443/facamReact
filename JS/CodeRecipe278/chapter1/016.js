// 조건문 사용하기 switch

const myFruit = "사과";

switch (myFruit) {
  case "사과":
  case "바나나":
    console.log("사과 혹은 귤임");
    break;
  default:
    console.log("기타 과일임");
    break;
}

// switch는 === 비교를 한다.
const value = "100";

switch (value) {
  case 100:
    console.log("숫자 100임");
    break;
  default:
    console.log("숫자 100이 아님");
    break;
}
