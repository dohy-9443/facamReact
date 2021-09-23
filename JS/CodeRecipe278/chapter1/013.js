// 함수의 파라미터 초깃값 설정하기

/**
 * 세금이 포함된 가격을 반환하는 함수
 * @param price 가격
 * @param tax 세율
 */

function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

// tax의 인수를 생략하면 초깃값 o.o8이 사용됨
const result1 = calcFunction(100);
console.log(result1);

// tax의 전달 값을 지정하면 해당 값이 사용됨
const result2 = calcFunction(100, 0.1);
console.log(result2);
