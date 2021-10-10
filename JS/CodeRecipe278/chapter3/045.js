// 배열 정의하기

// [] 배열 정의
// 배열[인덱스]  배열 요소 데이터의 값 가져오기

const arr1 = []; // 빈 배열
const arr2 = [0, 2, 8]; // '0', '2', '8' 이 들어 있는 데이터 타입
const arr3 = ['곰', '여우']; // '곰', '여우'가 들어 있는 데이터 타입
const arr4 = [1, '곰', false]; // '1', '곰', 'false'가 들어 있는 데이터 타입
console.log(arr4);

// 배열 내 다른 배열을 저장하거나 객체를 저장
const arr5 = [[1, 1, 1], [2, 2, 2]];

// 두 개의 객체가 들어 있는 데이터 타입
const arr6 = [{id: 1, name: '곰'}, {id: 2, name: '곰'}];
console.log(arr6[1].id)

const arr7 = ['곰', '여우'];
console.log(arr7[0]);

// new Array()