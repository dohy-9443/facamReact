const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

const GAME_TIME = 10; // 변하지않을 게임 시간

let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

init();

// 게임 세팅
function init() {
  buttonChange("게임 로딩중...");
  getWords();
  wordInput.addEventListener("input", checkMatch);
}

// 버튼 변경
function buttonChange(text) {
  button.innerText = text;
  text === "게임시작"
    ? button.classList.remove("loading")
    : button.classList.add("loading");
}

// 게임 실행되는 함수
function run() {
  if (isPlaying) {
    return;
  }

  isPlaying = true;
  time = GAME_TIME;
  wordInput.focus();
  score = 0;
  scoreDisplay.innerText = 0;
  timeInterval = setInterval(countDowm, 1000);
  checkInterval = setInterval(checkStatus, 50);
  buttonChange("게임 중...");
}

// 실시간으로 체크하기 위한 함수
function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange("게임시작");
    clearInterval(checkInterval);
  }
}

// 단어를 불러올 함수
function getWords() {
  axios
    .get("https://random-word-api.herokuapp.com/all")
    .then(function (response) {
      // handle success

      response.data.forEach((word) => {
        if (word.length < 10) {
          words.push(word);
        }
      });
      buttonChange("게임시작");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

// 단어 체크 함수
function checkMatch() {
  if (
    wordInput.value.toLocaleLowerCase() ===
    wordDisplay.innerText.toLocaleLowerCase()
  ) {
    wordInput.value = "";
    if (!isPlaying) {
      return;
    }
    score += 10;
    scoreDisplay.innerHTML = score;
    time = GAME_TIME;

    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
  }
}

// 시간 감소 함수
function countDowm() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}
