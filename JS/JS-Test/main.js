// ES6 Classes

class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getFullName = () => {
    return `${this.first} ${this.last}`;
  };
}

const dong = new User("DongHyun", "Baek");
const amy = new User("Amy", "Clarke");

console.log(dong.getFullName());
console.log(amy.getFullName());
