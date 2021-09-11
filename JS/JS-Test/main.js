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

const aForEach = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(aForEach);

const bMap = fruits.map((fruit, index) => {
  return {
    id: index,
    name: fruit,
  };
});

console.log(bMap);

// .filter()
// true가 반환되는 아이템들만 b에 배열로 들어간다.

const aFilter = numbers.map((number) => number < 3);
console.log(aFilter);

const bFilter = numbers.filter((number) => number < 3);
console.log(bFilter);

// .find() .findIndex()
// 배열 데이터안에서 조건에 맞는 특정한 아이템을 찾을 때

const aFind = fruits.find((fruit) => /^B/.test(fruit));
// B로 시작하는 아이템을 찾는다 true일 때 반환
console.log(aFind);

const bFindIndex = fruits.findIndex((fruit) => /^B/.test(fruit));
// B로 시작하는 아이템을 찾는다 true일 때 반환
// 근데 얘는 배열에 몇번째 있는지
console.log(bFindIndex);

// .includes()

const aIncludes = numbers.includes(3);
// numbers에 3이 포함 되어 있냐
console.log(aIncludes);

const bIncludes = fruits.includes("DongHyun");
// fruits에 DongHyun이 포함 되어 있냐
console.log(bIncludes);

// .push() .unshift()
// 원본 수정 주의

numbers.push(5);
// 5를 numbers 배열의 마지막으로 넣음
console.log(numbers);

numbers.unshift(0);
// 0을 numbers 배열의 가장 앞에 넣음
console.log(numbers);

// .reverse()
// 원본 수정됨 주의
// 배열의 순서를 뒤집음

numbers.reverse();
fruits.reverse();

console.log(numbers);
console.log(fruits);

// .splice()
// 원본 수정됨 주의

numbers.splice(2, 1, 6);
// numbers에 2번째 배열을 1개 지우고 거기에 3을 추가해라

console.log(numbers);

numbers.reverse();
console.log(numbers);
numbers.splice(3, 1);
console.log(numbers);

fruits.reverse();
console.log(fruits);
fruits.splice(2, 0, "orange");
console.log(fruits);
