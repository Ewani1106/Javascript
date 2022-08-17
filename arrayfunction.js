let data = [10, 20, 30];

data = data.concat([1, 2, 3]);
console.log(data);
console.log(data.indexOf(3));
console.log(data.includes(2));
console.log(data.length);
console.log(data.sort()); //alphabet
console.log(data.sort((a, b) => a - b)); // numerical
console.log(data.sort((a, b) => b - a));
let a = [1, 2, 4, 5, 6, 8];
a = a.fill(0);
console.log(a);
console.log(data.lastIndexOf(2));
data.pop();
console.log(data);
console.log(data.slice(1, 3));
data.splice(0, 0, 1, 2, 4);
console.log(data);
data.splice(0, 1, 20, 40);
console.log(data);
data.splice(data.indexOf(30), 1);
console.log(data);
keysdata = data.keys();
// console.log(data.values());
for (const element of keysdata) {
  console.log(data[element]);
}

let total = 0;
data = {
  name: "sumit",
  age: 10,
}; // json/ object
//console.log(data['name']);
//console.log(data);
//for (const element in data) {
// console.log(element);
// total = data['marks'];
// console.log(total);
//}

datatable = [
  {
    name: "sumit",
    age: 10,
    marks: [40, 50, 60],
  },
];
for (let index = 0; index < datatable.length; index++) {
  let total = 0;
  let marks = datatable[index]["marks"];
  avgval = marks.length;
  for (let j = 0; j < marks.length; j++) {
    total += marks[j];
  }
  datatable[index]["total"] = total;
  avg = total / avgval;
  datatable[index]["avg"] = avg;

  str = "";
  if (avg >= 80 && avg <= 100) {
    str = "Distinction";
  } else if (avg >= 60 && avg < 80) {
    str = "First Class";
  } else if (avg >= 40 && avg < 60) {
    str = "Second Class";
  } else {
    str = "Fail";
  }
  datatable[index]["grade"] = str;
}
//console.log(avg);
console.log(datatable);

//Student Table
let grid = document.getElementById("grid");
let textTemplate = document.getElementById("template").innerHTML;

datatable = [
  {
    name: "Sumit",
    age: 30,
    marks: [60, 70, 80],
  },
  {
    name: "Ewani",
    age: 23,
    marks: [50,60, 70],
  },
  {
    name: "Viral",
    age: 27,
    marks: [45, 55, 65],
  },
  {
    name: "Fenil",
    age: 21,
    marks: [10,20,30],
  },
  {
    name: "Priyanka",
    age: 26,
    marks: [35, 55, 45],
  },
];

let studentData = template.innerHTML
  .replace("{tableid}", "student-table")
  .replace("{bodyId}", "student-table-body");
grid.innerHTML = studentData;

for (let index = 0; index < datatable.length; index++) {
  let total = 0;
  let marks = datatable[index]["marks"];
  avgval = marks.length;
  for (let j = 0; j < marks.length; j++) {
    total += marks[j];
  }
  datatable[index]["total"] = total;
  avg = total / avgval;
  datatable[index]["avg"] = avg;

  str = "";
  if (avg >= 80 && avg <= 100) {
    str = "Distinction";
  } else if (avg >= 60 && avg < 80) {
    str = "First Class";
  } else if (avg >= 40 && avg < 60) {
    str = "Second Class";
  } else {
    str = "Fail";
  }
  datatable[index]["grade"] = str;
}

studentData = "";
for (let index = 0; index < datatable.length; index++) {
  studentData += "<tr>";
  studentData += "<td>" + datatable[index]["name"] + "</td>";
  studentData += "<td>" + datatable[index]["age"] + "</td>";
  let marks = datatable[index]["marks"];
  for (let j = 0; j < marks.length; j++) {
    studentData += "<td>" + marks[j] + "</td>";
  }
  studentData += "<td>" + datatable[index]["total"] + "</td>";
  studentData += "<td>" + datatable[index]["avg"] + "</td>";
  studentData += "<td>" + datatable[index]["grade"] + "</td>";
  studentData += "</tr>";
}

document.getElementById("student-table-body").innerHTML = studentData;

//Student Card
let grid1 = document.getElementById("grid1");
let textTemplate1 = document.getElementById("template1").innerHTML;

datatable = [
    {
      name: "Sumit",
      age: 30,
      marks: [60, 70, 80],
    },
    {
      name: "Ewani",
      age: 23,
      marks: [50,60, 70],
    },
    {
      name: "Viral",
      age: 27,
      marks: [45, 55, 65],
    },
    {
      name: "Fenil",
      age: 21,
      marks: [10,20,30],
    },
    {
      name: "Priyanka",
      age: 26,
      marks: [35, 55, 45],
    },
  ];

  for (let index = 0; index < datatable.length; index++) {
    let total = 0;
    let marks = datatable[index]["marks"];
    avgval = marks.length;
    for (let j = 0; j < marks.length; j++) {
      total += marks[j];
    }
    datatable[index]["total"] = total;
    avg = total / avgval;
    datatable[index]["avg"] = avg;
  
    str = "";
    if (avg >= 80 && avg <= 100) {
      str = "Distinction";
    } else if (avg >= 60 && avg < 80) {
      str = "First Class";
    } else if (avg >= 40 && avg < 60) {
      str = "Second Class";
    } else {
      str = "Fail";
    }
    datatable[index]["grade"] = str;
  }
  
  implement = "";
  datatable.forEach((element,index) => {
      implement += textTemplate1 .replace('{divid1}',"div-"+index).replace("{name}",element['name'])
      .replace("{age}",element['age'])
      .replace("{marks1}",element['marks'][0])
      .replace("{marks2}",element['marks'][1])
      .replace("{marks3}",element['marks'][2])
      .replace("{total}",element['total'])
      .replace("{avg}",element['avg'])
      .replace("{grade}",element['grade']);
  });
  grid1.innerHTML = implement;
  
//only button
  // const tableButton = document.querySelector('.button-table');
  // const cardButton = document.querySelector('.button-grid');
  // const changeMode = function(event){
  //   //event.preventDefault();
  //   const tableSelector = document.querySelector('.table-mode')
  //   const cardSelector = document.querySelector('.grid-mode');
    
  //   if('data-card' in event.target.attributes){
  //     tableSelector.style.display = "none";
  //     cardSelector.style.display = "block";
  //   }else{
  //     tableSelector.style.display = "block";
  //     cardSelector.style.display = "none";
  //   }
  // };

  // tableButton.addEventListener('click',changeMode);
  // cardButton.addEventListener('click',changeMode);


  const tableButton = document.querySelector('.button-table');
  const cardButton = document.querySelector('.button-grid');
  const changeMode = function(event){
    event.preventDefault();
    let b = this.getAttribute('data-card');
  
    const tableSelector = document.querySelector('.table-mode')
    const cardSelector = document.querySelector('.grid-mode');
    
    if(b !== null){
      tableSelector.style.display = "none";
      cardSelector.style.display = "block";
    }else{
      tableSelector.style.display = "block";
      cardSelector.style.display = "none";
    }
  };

  tableButton.addEventListener('click',changeMode);
  cardButton.addEventListener('click',changeMode);