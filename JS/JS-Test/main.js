function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// 이렇게 적으면 메모리에 딱 한번만 할당 됨
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const dong = new User("donghyun", "baek");
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");
// 여기서 dong amy neo 를 인스턴스라고 함

// getFullName이라는 한번만 만들어진 녀석을 참조하는 것
console.log(dong.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());
