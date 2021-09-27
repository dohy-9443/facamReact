// 소수점 자릿수 지정하기

// 숫자값.toFixed([자릿수]) 소수점 이하 자릿수 지정
// 숫자값.toPrecision([자릿수]) 자릿수 지정 정밀도 반환
// 자릿수 생략시 0

// toFixed()는 소수점의 자릿수 지정이 가능하며,
// 소수점 이하는 지정된 자릿수 변환 후 문자열로 반환
console.log((0.33333).toFixed(2));

// 소수점 이하의 자릿수가 줄어들 경우 값을 근사치로 변환
console.log((123.5678).toFixed(1));

// 소수점 이하의 자릿수가 늘어날 경우 0으로 채워진다.
console.log((2.4).toFixed(4));

// toPrecision()은 들어온 값을 지정한 자릿수의 정밀도로 변환하여 문자열을 반환
console.log((0.333333).toPrecision(2));
console.log((123.456).toPrecision(3));
console.log((4.56).toPrecision(2));
console.log((10).toPrecision(4));
