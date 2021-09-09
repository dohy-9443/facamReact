// 변수 유효범위(Variable Scope)
// var , let , const

function scope() {
  if (true) {
    const a = 123;
  }
  console.log(a);
}

scope();
