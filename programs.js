//Calculate area of circle
var r = 2;
const pi = 3.14;
var a = pi * r * r;
console.log("Area of Circle : " + a);

// Using if-else student pass of fail
a = 70;
if (a > 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Three numbers & find out which is maximum
var x = 10;
var y = 20;
var z = 30;
if (x > y && x > z) {
  console.log(x + " is maximum");
} else if (y > x && y > z) {
  console.log(y + " is maximum");
} else if (z > x && z > y) {
  console.log(z + " is maximum");
} else {
  console.log("Data Mismatch");
}

//Three Strings & find out which is maximum
var x = "10";
var y = "20";
var z = "30";
x = parseInt(x);
y = parseInt(y);
z = parseInt(z);
if (x > y && x > z) {
  console.log(x + " is maximum");
} else if (y > x && y > z) {
  console.log(y + " is maximum");
} else if (z > x && z > y) {
  console.log(z + " is maximum");
} else {
  console.log("Data Mismatch");
}

//one string & one number, find out which is maximum
var x = "20";
var y = 10;
if (typeof x === "number" && typeof y === "number") {
  console.log(x + y);
} else if ((typeof x === "string") ^ (typeof y === "string")) {
  a = parseInt(x);
  b = parseInt(y);
  if (a > b) {
    console.log(a + " is maximum");
  } else {
    console.log(b + " is maximum");
  }
} else {
  console.log("Data Mismatch");
}

//Calculator
var p = parseInt(document.getElementById("oprand1").innerText);
var q = parseInt(document.getElementById("oprand2").innerText);
//let choice = "+";
// choice = "-";
// choice = "*";
// choice = "/";
// choice = "%";
// if (typeof choice === "string") {
//   let sum = p + q;
//   let sub = p - q;
//   let mul = p * q;
//   let div = p / q;
//   let mod = p % q;
//   console.log("Addition is : " + sum);
//   console.log("Subtraction is : " + sub);
//   console.log("Multiplication is : " + mul);
//   console.log("Division is : " + div);
//   console.log("Modulo is : " + mod);
// } else {
//   console.log("Data Mismatch");
// }
var choice = document.getElementById("choice").innerText;
// if (choice === "+") {
//   console.log("Addtion : " + p + q);
//   document.getElementById("ans").style.backgroundColor = "red";
//   document.getElementById("ans").innerHTML = "<b>" + (p + q) + "</b>";
// } else if (choice === "-") {
//   console.log("Substraction : " + p - q);
//   document.getElementById("ans").style.backgroundColor = "yellow";
//   document.getElementById("ans").innerHTML = "<b>" + (p - q) + "</b>";
// } else if (choice === "*") {
//   console.log("Multiplication : " + p * q);
//   document.getElementById("ans").style.backgroundColor = "blue";
//   document.getElementById("ans").innerHTML = "<b>" + p * q + "</b>";
// } else if (choice === "/") {
//   console.log("Division : " + p / q);
//   document.getElementById("ans").style.backgroundColor = "orange";
//   document.getElementById("ans").innerHTML = "<b>" + p / q + "</b>";
// }

switch (choice) {
  case "+":
    console.log("Addtion : " + p + q);
    document.getElementById("ans").style.backgroundColor = "red";
    document.getElementById("ans").innerHTML = "<b>" + (p + q) + "</b>";
    break;
  case "-":
    console.log("Substraction : " + p - q);
    document.getElementById("ans").style.backgroundColor = "yellow";
    document.getElementById("ans").innerHTML = "<b>" + (p - q) + "</b>";
    break;
  case "*":
    console.log("Multiplication : " + p * q);
    document.getElementById("ans").style.backgroundColor = "blue";
    document.getElementById("ans").innerHTML = "<b>" + p * q + "</b>";
    break;
  case "/":
    console.log("Division : " + p / q);
    document.getElementById("ans").style.backgroundColor = "orange";
    document.getElementById("ans").innerHTML = "<b>" + p / q + "</b>";
    break;
}
