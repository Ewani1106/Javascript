let num = document.getElementById('num'),grid = document.getElementById('grid'),template = document.getElementById('template');

let total = parseInt(num.innerText);

let table = [];

for (let i = 0; i < total; i++) {
    let multiplicationTable = "";
    for(let j = 1; j <= 10;j++){
        multiplicationTable +=  "<tr><td>" +
        j +
        "</td>" +
        "<td>" +
        "*" +
        "</td>" +
        "<td>" +
        (i+1) +
        "</td>" +
        "<td>" +
        "=" +
        "</td>" +
        "<td>" +
        j * (i+1) +
        "</td></tr>";
    }
    table.push(template.innerHTML.replace('{divid}',"div-"+(i+1)).replace('{bodyId}',"tbody-"+(i+1)).replace("{number}",(i+1)).replace('{struct}',multiplicationTable));  
}


for (let index = 0; index < table.length; index++) {
    const element = table[index];
    grid.innerHTML += element;
}
