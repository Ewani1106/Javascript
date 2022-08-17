var a = 10;
while (a > 0) {
  document.getElementById("newelid").innerHTML += "<li>" + a + "</li>";
  a--;
}

do {
  document.getElementById("newelid").innerHTML += "<li>" + a + "</li>";
  a--;
} while (a > 0);

if (document.getElementById("oprand1") !== undefined) {
  let qty = document.getElementById("oprand1").innerText;
  if (parseInt(qty) !== NaN) {
    for (let i = 1; i <= parseInt(qty); i++) {
      // document.getElementById("creator").innerHTML += "<tr>";
      document.getElementById("creator").innerHTML +=
        "<tr><td>" + i + "</td></tr>";
      // document.getElementById("creator").innerHTML += "</tr>";
    }
  }
}
