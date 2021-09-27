// 정규 표현식 사용하기

if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
  console.log("접속한 브라우저는 iOS입니다.");
}

// 정규 표현을 사용하지 않은 코드
if (
  navigator.userAgent.includes("iPhone") ||
  navigator.userAgent.includes("iPod") ||
  navigator.userAgent.includes("iPad")
) {
  console.log("접속한 브라우저는 iOS입니다.");
}
