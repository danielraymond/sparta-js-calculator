var calculatorType = prompt("Which type of calculator would you like to use? ('b' for basic, 'a' for advanced, 'x' for BMI, 't' for trip calculator).");

// CALCULATOR BASIC




function calculatorBasic() {
  var numberOne = prompt("Enter the number you would like to perform an operation on.");
  var operator = prompt("Enter the operator you would like to use (+, -, *, /)");
  var numberTwo = prompt("Enter the number you would like the operator to use.")

  function addition(numberOne, numberTwo) {
      var answer = parseFloat(numberOne) + parseFloat(numberTwo);
      alert(numberOne + "+" + numberTwo + "=" + answer);
  }

  function subtraction(numberOne, numberTwo) {
      var answer = parseFloat(numberOne) - parseFloat(numberTwo);
      alert(numberOne + "-" + numberTwo + "=" + answer);
  }

  function multiplication(numberOne, numberTwo) {
      var answer = parseFloat(numberOne) * parseFloat(numberTwo);
      alert(numberOne + "*" + numberTwo + "=" + answer);
  }

  function division(numberOne, numberTwo) {
      var answer = parseFloat(numberOne) / parseFloat(numberTwo);
      alert(numberOne + "/" + numberTwo + "=" + answer);
  }

  if (operator == "+") {
    addition(numberOne, numberTwo);
  } else if (operator == "-") {
    subtraction(numberOne, numberTwo);
  } else if (operator == "*") {
    multiplication(numberOne, numberTwo);
  } else if (operator == "/") {
    division(numberOne, numberTwo);
  } else {
    alert("Error!")
  }
}

if (calculatorType === "b") {
  calculatorBasic();
} else if (calculatorType === "a") {
  calculatorAdvanced();
}









// CALCULATOR ADVANCED


else if (calculatorType == "a") {
  var powerOrRoot = prompt("Which operation would you like to do?('r' for square root, 'p' for power, 'e' for exponential function)")
  if (powerOrRoot == "p") {
    var numberOne = prompt("Enter the base number");
    var numberTwo = prompt("Enter the exponent");
    var answer = Math.pow(numberOne, numberTwo);
    var message = "The answer is " + answer;
    alert(message);
  } else if (powerOrRoot == "r") {
    var numberOne = prompt("Enter the value you want the square root of:");
    answer = Math.sqrt(numberOne);
    var message = "The answer is " + answer;
    alert(message);
  } else if (powerOrRoot == "e") {
    var numberOne = prompt("Enter the exponent");
    var answer = Math.exp(numberOne);
    var message = "The answer is " + answer;
    alert(message);
  } else {
    alert("Error: Incorrect Input!");
  }
}
// CALCULATOR BMI

 else if (calculatorType == "x") {
  var system = prompt("Imperial or Metric measurement system? ('i' or 'm')")
  if (system == "m") {
    var height = prompt("Enter your height in metres");
    var weight = prompt("Enter your weight in kilograms");
    var answer = (weight / height) / height;
    var message = "The answer is " + answer;
    alert(message);
  } else if (system == "i") {
    var height = prompt("Enter your height in inches");
    var weight = prompt("Enter your weight in pounds");
    var answer = (weight * 703) / (height * height);
    var message = "The answer is " + answer;
    alert(message);
  }

// CALCULATOR TRAVEL

} else if (calculatorType == "t") {
  var distance = prompt("How far do you have to travel? (miles)");
  var speed = prompt("What is the average speed of the journey (mph)");
  var fuelEfficiency = prompt("What is the fuel efficiency of your car (mpg)");
  var cost = prompt("What is the cost per gallon of your fuel");
  journeyTime = distance / speed;
  if (speed > 60) {
    fuelEfficiency = fuelEfficiency - ((speed - 60) * 2);
    if (fuelEfficiency > 0) {
      priceOfJourney = (cost / fuelEfficiency) * distance;
    } else if (fuelEfficiency <= 0) {
      alert("Error values entered are not acceptable.");
    }
  } else {
    priceOfJourney = (cost / fuelEfficiency) * distance;
  }
  message = "Journey Time: " + journeyTime + " hours. Cost: " + priceOfJourney + " pounds.";
  alert(message);
} else {
  alert("Incorrect input!")
}
