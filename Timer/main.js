const display = document.querySelector(".display");
const hour = display.querySelector(".hour");
const min = display.querySelector(".min");
const sec = display.querySelector(".sec");
const startBtn = document.querySelector("#start");
const btns = document.querySelectorAll("button");
const endBtn = document.querySelector("#end");
const resetBtn = document.querySelector("#reset");
const recordBtn = document.querySelector("#record");
const recordList = document.querySelector("#record_list");

let intervalId;
let secData = 0;
let secString;
let minData = 0;
let minString;
let hourData = 0;
let hourString;

const handleStartClick = (e) => {
  e.preventDefault();
  intervalId = setInterval(() => {
    if (secData >= 59) {
      secData = -1;
      minData++;
      minString = String(minData).padStart(2, "0");
      min.innerText = minString;
      if (minData >= 59) {
        minData = -1;
        hourData++;
        hourString = String(hourData).padStart(2, "0");
        hour.innerText = hourString;
      }
    }
    secData++;
    secString = String(secData).padStart(2, "0");
    sec.innerText = secString;
  }, 1000);
};
const handleEndClick = (e) => {
  e.preventDefault();
  clearInterval(intervalId);
};
const handleResetClick = (e) => {
  e.preventDefault();
  secData = 0;
  sec.innerText = secString = String(secData).padStart(2, "0");
  minData = 0;
  min.innerText = minString = String(minData).padStart(2, "0");
  hourData = 0;
  hour.innerText = hourString = String(hourData).padStart(2, "0");
};
const handleRemoveClick = (e) => {
  const li = e.target.parentElement;
  li.remove();
};
const handleRecordClick = (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const hourSpan = document.createElement("span");
  hourSpan.innerText = hour.innerText + ":";
  const minSpan = document.createElement("span");
  minSpan.innerText = min.innerText + ":";
  const secSpan = document.createElement("span");
  secSpan.innerText = sec.innerText;
  const removeSpan = document.createElement("span");
  removeSpan.innerText = "X";
  li.appendChild(hourSpan);
  li.appendChild(minSpan);
  li.appendChild(secSpan);
  li.appendChild(removeSpan);
  removeSpan.addEventListener("click", handleRemoveClick);
  recordList.prepend(li);
};
const handleMousedown = (e) => {
  const btn = e.target;
  btn.classList.add("mousedown");
};
const handleMouseup = (e) => {
  const btn = e.target;
  btn.classList.remove("mousedown");
};

startBtn.addEventListener("click", handleStartClick);
endBtn.addEventListener("click", handleEndClick);
resetBtn.addEventListener("click", handleResetClick);
recordBtn.addEventListener("click", handleRecordClick);
btns.forEach((btn) => btn.addEventListener("mousedown", handleMousedown));
btns.forEach((btn) => btn.addEventListener("mouseup", handleMouseup));
