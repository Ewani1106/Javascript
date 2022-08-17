let data = [];
data.push(1,2,3);
console.log(data);
data.push(1);
console.log(data);

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element);
}

data.forEach((element,index) => {
    console.log(element,index);
});

data = ["<div>Sample2</div>","<div>Sample</div>"];

data.forEach((element,index) => {
    document.querySelector('body').innerHTML += element;
});

let tableTemplate = document.getElementById('table').innerHTML;
let implement = "";
data.forEach((element,index) => {
    implement += tableTemplate.replace('{tableId}',"table-"+index).replace("{bodyId}","body-"+index);
});
document.querySelector('body').innerHTML += implement;


let gridTemplate = document.getElementById('grid').innerHTML;
data = [ ["sunt aut facere repellat provident occaecati excepturi optio reprehenderit","quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"] ,["sunt aut facere repellat provident occaecati excepturi optio reprehenderit","quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"]];

implement = "";
data.forEach((element,index) => {
    implement += gridTemplate.replace('{divid}',"div-"+index).replace("{headingData}",element[0]).replace("{paraData}",element[1]);
});
document.querySelector('body').innerHTML += implement;




let tablemultiplicationTemplate = document.getElementById('tablemultiplication').innerHTML;
mulvalue=[[],[],[]]
implement = "";
mulvalue.forEach((element,index) => {
    implement += tablemultiplicationTemplate.replace('{tabledivid}',"div-"+index).replace("{tablemulid}",element[0]).replace("{tableheaderid}",element[1]).replace("{tablebodyid}",element[2]);
});
document.querySelector('body').innerHTML += implement;

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