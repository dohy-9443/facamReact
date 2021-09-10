class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBicycle = new Bicycle("자전거", 2);
const daughtersBicycle = new Bicycle("세발자전거", 3);
console.log(myBicycle);
console.log(daughtersBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

const myCar = new Car("제네시스", 4, true);
const daughtersCar = new Car("그랜저", 4, false);
console.log(myCar);
console.log(daughtersCar);

class Card {
  constructor(shape, count) {
    this.shape = shape;
    this.count = count;
  }
  getPrint = () => {
    return `나는 ${this.shape} 모양의 카드가 ${this.count} 장 있습니다.`;
  };
}

class Spade extends Card {
  constructor(shape, count) {
    super(shape, count);
  }
}

class Clover extends Card {
  constructor(shape, count) {
    super(shape, count);
  }
}

class Heart extends Card {
  constructor(shape, count) {
    super(shape, count);
  }
}

class Diamond extends Card {
  constructor(shape, count) {
    super(shape, count);
  }
}

class Jocker extends Card {
  constructor(shape, count) {
    super(shape, count);
  }
}

const spade = new Spade("스페이드", 13);
const clover = new Clover("클로버", 13);
const heart = new Heart("하트", 13);
const diamond = new Diamond("다이아몬드", 13);
const jocker = new Jocker("조커", 2);

const cardDec = [];
cardDec.push(spade);
cardDec.push(clover);
cardDec.push(heart);
cardDec.push(diamond);
cardDec.push(jocker);

console.log(spade.getPrint());
console.log(clover.getPrint());
console.log(heart.getPrint());
console.log(diamond.getPrint());
console.log(jocker.getPrint());

let total = 0;

for (let i = 0; i < cardDec.length; i++) {
  total += cardDec[i].count;
}
console.log(
  `카드박스에는 ${spade.shape}가 ${spade.count} 장, ${clover.shape}가 ${clover.count} 장, ${heart.shape}가 ${heart.count} 장, ${diamond.shape}가 ${diamond.count} 장, ${jocker.shape}가 ${jocker.count} 장있고, 총 ${total} 장 들어있습니다.`
);
