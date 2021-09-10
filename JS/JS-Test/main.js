// JS 데이터

// String: '', "", ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers[1]);
console.log(fruits);

// .length
console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);

// .concat()
// 두개의 배열 데이터를 병합하여 새로운 배열 데이터를
// 그 자리에 반환 해줌
// 원본 데이터는 영향이 없음
console.log(numbers.concat(fruits));
console.log(numbers);
console.log(fruits);

// .forEach()
fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
});
// 지금 보면 fruits에 사과 바나나 체리 있다.
// 배열의 요소만큼 반복해서 도는데 첫번째 element에
// 사과가 들어가면서 그 인덱스 번호는 0번 array는
// 현재 참조하고있는 배열을 내보낸다. 그래서 결과가
// 아래처럼 나온다.

// Apple 0 ['Apple', 'Banana', 'Cherry']
// Banana 1 ['Apple', 'Banana', 'Cherry']
// Cherry 2 ['Apple', 'Banana', 'Cherry']

// .map()
// map은 forEach와 다르게 return으로 내보낸다.
// 반복해서 돌리고 나온 데이터들을 반환해
// 새로운 배열로서 b에 담는다.

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(a);

const b = fruits.map((fruit, index) => {
  return {
    id: index,
    name: fruit,
  };
});

console.log(b);
