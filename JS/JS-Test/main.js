// 전개 연산자 (Spread)

const fruits = ["Apple", "Banana", "Cherry", "Dragon fruit"];
console.log(fruits);
console.log(...fruits);
// console.log('Apple', 'Banana', 'Cherry')

// function toObject(a, b, ...c) { // ...c는 rest parameter
//   return {
//     apple: a,
//     banana: b,
//     rest: c,
//   };
// }

const toObject = (a, b, ...c) => ({ a, b, c });

console.log(toObject(...fruits));
