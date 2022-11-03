const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

let num1 = 0;
let num2 = 0;
let sign = "";
let res = 0;

const handleNumberClick = (e) => {
  num2 = Number(e.target.innerText);
  display.innerText = num2;
};
const handleSignClick = (e) => {
  sign = e.target.innerText;
  num1 = num2;
};
const handleResultClick = (e) => {
  if (sign === "+") {
    res = num1 + num2;
  } else if (sign === "-") {
    res = num1 - num2;
  } else if (sign === "*") {
    res = num1 * num2;
  } else if (sign === "/") {
    res = num1 / num2;
  }
  num2 = res;
  display.innerText = res;
};
const handleResetClick = () => {
  num1 = 0;
  num2 = 0;
  sign = "";
  res = 0;
  display.innerText = "0";
};

numbers.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});
signs.forEach((sign) => {
  sign.addEventListener("click", handleSignClick);
});
result.addEventListener("click", handleResultClick);
reset.addEventListener("click", handleResetClick);