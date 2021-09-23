// 다수의 파라미터를 가지는 함수 정의하기

/**
 * 파라미터의 합계를 반환하는 함수
 * @param prices
 * @returns {number}
 */

function calcSum(...prices) {
  let result = 0;

  for (const value of prices) {
    result += value;
  }

  return result;
}

const result1 = calcSum(10, 20);
console.log(result1);

const result2 = calcSum(5, 10, 15);
console.log(result2);
