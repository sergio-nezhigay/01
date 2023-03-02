const number1 = +prompt("Enter 1st number...");
const number2 = +prompt("Enter the second number...");
const sign = prompt("Enter the sign ( + , - , * , / )...");
let result = 0;

if (sign === "+") result = number1 + number2;
if (sign === "-") result = number1 - number2;
if (sign === "*") result = number1 * number2;
if (sign === "/") result = number1 / number2;

alert(`Result of ${number1} ${sign} ${number2} is ${result}`);

const numberOfCircles = +prompt("Now please, enter the number of circles...");

function createRGB() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateCircle(r) {
  let str = `<div style="
    background-color:${createRGB()};
    width:${r * 2}px;
    height:${r * 2}px;
    float: left;
    border: 8px solid ${createRGB()};
    border-radius: ${r}%"></div> `;
  document.write(str);
}

for (let i = 0; i < numberOfCircles; i++) {
  generateCircle(i);
}
