var calculatorType = prompt("Which type of calculator would you like to use? ('b' for basic, 'a' for advanced, 'x' for BMI).");

if (calculatorType == "b") {
  var numberOne = prompt("Enter the number you would like to perform an operation on.");
  var operator = prompt("Enter the operator you would like to use (+, -, *, /)");
  if (operator == "+") {
    var numberTwo = prompt("Enter the number you would like the operator to use.")
    var answer = parseFloat(numberOne) + parseFloat(numberTwo);
    var message = "The answer is " + answer;
    alert(message);
  } else if (operator == "-") {
    var numberTwo = prompt("Enter the number you would like the operator to use.")
    var answer = parseFloat(numberOne) - parseFloat(numberTwo);
    var message = "The answer is " + answer;
    alert(message);
  } else if (operator == "*") {
    var numberTwo = prompt("Enter the number you would like the operator to use.")
    var answer = parseFloat(numberOne) * parseFloat(numberTwo);
    var message = "The answer is " + answer;
    alert(message);
  } else if (operator == "/") {
    var numberTwo = prompt("Enter the number you would like the operator to use.")
    var answer = parseFloat(numberOne) / parseFloat(numberTwo);
    var message = "The answer is " + answer;
    alert(message);
  } else {
    alert("Error: Incorrect Input!");
  }
} else if (calculatorType == "a") {
  var powerOrRoot = prompt("Which operation would you like to do?('r' for square root or 'p' for power)")
  if (powerOrRoot == "p") {
    var numberOne = prompt("Enter the base number");
    var numberTwo = prompt("Enter the exponent");
    answer = Math.pow(numberOne, numberTwo);
    var message = "The answer is " + answer;
    alert(message);
  } else if (powerOrRoot == "r") {
    var numberOne = prompt("Enter the value you want the square root of:");
    answer = Math.sqrt(numberOne);
    var message = "The answer is " + answer;
    alert(message);
  } else {
    alert("Error: Incorrect Input!");
  }
} else if (calculatorType == "x") {
  var height = prompt("Enter your height in metres");
  var weight = prompt("Enter your weight in kilograms");

}
