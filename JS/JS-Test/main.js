const dong = {
  firstName: "donghyun",
  lastName: "baek",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
    // 여기서 this = dong
  },
};

console.log(dong);

const print = dong.getFullName();

console.log(print);

const amy = {
  firstName: "Amy",
  lastName: "Clarke",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(amy.getFullName());

const neo = {
  firstName: "Neo",
  lastName: "Smith",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(neo.getFullName());
