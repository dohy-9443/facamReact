// 반복 처리 스킵 continue

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

console.log("루프 끝");

// 가독성 떨어짐

function myFunc(flgA) {
  for (let i = 0; i < 10; i++) {
    if (flgA === true) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}
console.log(myFunc(true));

// 가독성 좋음
function myFunc2(flgA) {
  for (let i = 0; i < 10; i++) {
    if (flgA === false) {
      continue;
    }

    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}

console.log(myFunc2(false));
