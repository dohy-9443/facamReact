const user = {
  name: "DONGHYUN",
  age: 27,
  emails: ["dong944320@gmail.com", "neo@zillinks.com"],
};

localStorage.setItem("user", JSON.stringify(user));
// setItem('데이터 이름', 저장할 객체 데이터)

console.log(JSON.parse(localStorage.getItem("user")));
// getItem은 localStorage에 있는 데이터를 가져와서 보는거

localStorage.removeItem("user");
// removeItem()은 데이터 지우기
