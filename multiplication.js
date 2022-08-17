//1st code
if (document.getElementById("mulval") !== undefined) {
  let qty = parseInt(document.getElementById("mulval").innerText);
  if (qty !== NaN) {
    for (let i = 1; i <= 10; i++) {
      document.getElementById("multi").innerHTML +=
        "<tr><td>" +
        qty +
        "</td>" +
        "<td>" +
        "*" +
        "</td>" +
        "<td>" +
        i +
        "</td>" +
        "<td>" +
        "=" +
        "</td>" +
        "<td>" +
        qty * i +
        "</td></tr>";
    }
  }
}

//2nd code
if (document.getElementById("mulval1") !== undefined) {
  let qty1 = parseInt(document.getElementById("mulval1").innerText);
  if (qty1 !== NaN) {
    for (let i = 10; i <= 20; i++) {
      document.getElementById("multi1").innerHTML +=
        "<tr><td>" +
        qty1 +
        "</td>" +
        "<td>" +
        "*" +
        "</td>" +
        "<td>" +
        i +
        "</td>" +
        "<td>" +
        "=" +
        "</td>" +
        "<td>" +
        qty1 * i +
        "</td></tr>";
    }
  }
}

//3rd code

if (document.getElementById("mulval-mul") !== undefined) {
  let qty2 = parseInt(document.getElementById("mulval-mul").innerText);
  let data = "";
  if (qty2 !== NaN) {
    for (let i = 1; i <= qty2; i++) {
      data += "<table>";
      for (let j = 1; j <= 10; j++) {
        data +=
          "<tr><td>" +
          i +
          "</td>" +
          "<td>" +
          "*" +
          "</td>" +
          "<td>" +
          j +
          "<td>" +
          "=" +
          "</td>" +
          "<td>" +
          i * j +
          "</td></tr>";
      }
      data += "</table>";
    }
    document.getElementById("div-mul").innerHTML += data;
  }
}
