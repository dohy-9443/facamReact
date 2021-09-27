// 정규 표현식으로 특정 문자 검색하기

// /패턴/.test(문자열)  문자열과 패턴의 일치 여부 확인

console.log(/J/.test("JavaScript")); // 'J'가 'JavaScript'에 포함되어 있는지 여부. true
console.log(/^iP/.test("iPhone")); // 'iPhone'의 시작 문자가 'iP'인지 여부. True
console.log(/\d/.test("레시피")); // '레시피' 문자열 내 숫자 포함 여부. false
console.log(/Java.*/.test("JavaScript")); // 'Java' 다음의 문자 'a'가 0회 이상 존재하는지 여부. true
console.log(/코.*피/.test("코드 레시피")); // '코피' 혹은 '코' 와 '피' 사이의 문자 존재 여부. true
console.log(/\d+-\d+-\d+/.test("010-1234-5678")); // '숫자-숫자-숫자'의 형식 여부. true
