datatable = {
  namestud: "Ewani",
  course: "ReactJS",
  marks: [80,50,60],
  // marks1 : "40",
  // marks2 : "50",
  // marks3 : "60"
};

let nameid = document.getElementById("name");
nameid.value = datatable["namestud"];

let courseid = document.getElementById("course");
courseid.value = datatable["course"];

for (let i = 0; i < datatable["marks"].length; i++) {
  document.getElementById("marks"+(i+1)).value = datatable["marks"][i];

// let marks1id = document.getElementById("marks1");
// marks1id.value = datatable["marks1"];
// let marks2id = document.getElementById("marks2");
// marks2id.value = datatable["marks2"];
// let marks3id = document.getElementById("marks3");
// marks3id.value = datatable["marks3"];


  //Total of array Function
  let marks = datatable["marks"];
  for (let j = 0; j < marks.length; j++) {
    function totalArray(marks) {
      let total = 0; 
      marks.forEach(item => {
        total += item;
      });
      return total;
    }
    console.log(totalArray(marks));
    datatable["total"]=totalArray(marks);
    }
  }

    //Avg of array Function
    let marksstud = datatable["marks"];
    avgval=marksstud.length;
    for (let j = 0; j < marksstud.length; j++) {
      function avgArray(marksstud) {
        let total = 0; 
        marksstud.forEach(item => {
          total += item;
          avg = (total/avgval);
          avg = avg.toFixed(2);
        });
        return avg;
      }
      console.log(avgArray(marksstud));
      datatable["avg"]=avgArray(marksstud);
      }

      //Grade of array Function
      let grade = datatable["marks"];
    avgval=marksstud.length;
    for (let j = 0; j < grade.length; j++) {
      function gradeArray(grade) {
        let total = 0; 
        grade.forEach(item => {
          total += item;
          avg = total/avgval;
          grade = "";
            if (avg >= 80 && avg <= 100) {
              grade = "Distinction";
            } else if (avg >= 60 && avg < 80) {
              grade = "First Class";
            } else if (avg >= 40 && avg < 60) {
              grade = "Second Class";
            } else {
              grade = "Fail";
            }
        });
        return grade;
      }
      console.log(gradeArray(grade));
      datatable["grade"]=gradeArray(grade);
      }
 
function createTable(){
  let studentData = template.innerHTML
  .replace("{tableid}", "student-table")
  .replace("{bodyId}", "student-table-body");
  grid.innerHTML = studentData;

  studentData = "";
  studentData += "<tr>";
  studentData += "<td>" + nameid.value + "</td>";
   //console.log(studentData);
  studentData += "<td>" + courseid.value + "</td>";
  let marks = datatable["marks"];
  for (let j = 0; j < marks.length; j++) {
    studentData += "<td>" + marks[j] + "</td>";
  }
  studentData += "<td>" + datatable["total"] + "</td>";
  studentData += "<td>" + datatable["avg"] + "</td>";
  studentData += "<td>" + datatable["grade"] + "</td>";
  studentData += "</tr>";
 
  document.getElementById("student-table-body").innerHTML = studentData;
}

// const tableButton = document.querySelector('.button');
//   const changeMode = function(event){
//     event.preventDefault();
//     let b = this.getAttribute('data-button');
  
//     const tableSelector = createTable();
//     const cardSelector = document.querySelector('.formclass');
    
//     if(b === null){
//       tableSelector.style.display = "none";
//       cardSelector.style.display = "block";
//     }else{
//       tableSelector.style.display = "block";
//       cardSelector.style.display = "none";
//     }
//   };

//   tableButton.addEventListener('click',changeMode);
//   cardButton.addEventListener('click',changeMode);