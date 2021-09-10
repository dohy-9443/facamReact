// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const donghyun = {
  name: "donghyun",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
donghyun.normal();
donghyun.arrow();

const amy = {
  name: "Amy",
  normal: donghyun.normal,
  arrow: donghyun.arrow,
};

amy.normal();
amy.arrow();
