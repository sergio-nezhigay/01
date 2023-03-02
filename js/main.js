const number1 = +prompt("Enter 1st number...");
const number2 = +prompt("Enter the second number...");
const sign = prompt("Enter the sign ( + , - , * , / )...");
let result = 0;

if (sign === "+") result = number1 + number2;
if (sign === "-") result = number1 - number2;
if (sign === "*") result = number1 * number2;
if (sign === "/") result = number1 / number2;

alert(`Result of ${number1} ${sign} ${number2} is ${result}`);
