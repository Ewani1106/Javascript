let data = document.getElementsByClassName("sample");
console.log(data);
data = document.getElementsByTagName("div");
console.log(data);
data = document.getElementsByName("username");
console.log(data);

data = document.querySelectorAll(".sample p");
console.log(data);
data = document.querySelectorAll('[type="text"],p');
console.log(data);
data = document.querySelectorAll("p + span");
console.log(data);

data = document.querySelector("p + span");
console.log(data);
