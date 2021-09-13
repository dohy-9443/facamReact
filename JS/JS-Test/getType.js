export default function getType(data) {
  // export default 는 기본 통로 ( 내보내기의 기본 )
  // 기본이라서 따로 이름을 안정해줘도됌 getType 지워도 됌
  return Object.prototype.toString.call(data).slice(8, -1);
}

// export default 123
// 하나의 모듈에서는 하나의 기본 내보내기만 가능함
