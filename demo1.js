// var global
// let local
// const fixed
// dynamic typing
var a = 10;
console.log(a, typeof a);

a = 10.055;
console.log(a, typeof a);

a = "10.0";
console.log(a, typeof a);

a = true;
console.log(a, typeof a);

a = [];
console.log(a, typeof a);

a = {}; // json
console.log(a, typeof a);

a = function () {};
console.log(a, typeof a);

// class Employee {}
// a = new Employee();
// console.log(a, typeof a);
a = 10;
let b = 20;
console.log(a + b);
console.log(a + "20");

a = "10000.5033";
b = "20009";
let c = parseFloat(a) + parseInt(b);
console.log(c, c.toFixed(2));

console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
a = 10;
b = 20;
console.log(a ** b);

console.log(a > b);
console.log(a >= b);

console.log(a < b);
console.log(a <= b);

console.log(a != b);
console.log(a == b);

a = 10;
b = "10";
console.log(a != b);
console.log(a == b); // value

console.log(a !== b); //type and value
console.log(a === b);

console.log(a > b && a > 0);
console.log(a < b || a > 0);
console.log(!(a < b) && a > 0);

a = 10;
console.log(a++, ++a);
console.log(a--, --a);
a = a + 1;
console.log(a);
a += 1; // a = a + 1
console.log(a);

c = typeof a === "number" && b === "number" ? a + b : "Data type mismatch";
console.log(c);

if (typeof a === "number" && b === "number") {
  console.log(a + b);
}

a = 10;
b = "abcd";
if (typeof a === "number" && b === "number") {
  console.log(a + b);
} else {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a + b);
}

let iii;
console.log(iii);

a = 10;
b = "asda";
if (typeof a === "number" && b === "number") {
  console.log(a + b);
} else if ((typeof a === "string") ^ (typeof b === "string")) {
  c = parseFloat(a);
  if (isNaN(c)) {
    console.log(a, " type mismatch");
  }
  c = parseFloat(b);
  if (isNaN(c)) {
    console.log(b, " type mismatch");
  }
} else {
  console.log("please provide valid number");
}
