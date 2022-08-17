const student = {
  studentform: {
    id: "",
    name: "",
    email: "",
    gender: "male",
    marks: [],
    total: 0,
    avg: 0,
    grade: "",
    //complete: false,
  },
  resetStudentform: function () {
    student.studentform = {
      id: "",
      name: "",
      email: "",
      gender: "male",
      marks: [],
      total: 0,
      avg: 0,
      grade: "",
      //complete: false,
    };
  },
  nameEle: null,
  emailEle: null,
  genderEle: null,
  // marksEle:null,

  studentList: [],
  submitButton: null,
  tableBody: null,

  init: function (
    studentName,
    emailName,
    genderName,
    marksName,
    submitButtonId,
    tableBody
  ) {
    student.nameEle = document.getElementsByName(studentName)[0];
    student.emailEle = document.getElementsByName(emailName)[0];

    student.genderEle = document.getElementsByName(genderName);
    student.studentform.genderVal = "male";
    student.genderEle.forEach((element) => {
      element.addEventListener("change", function () {
        if (this.checked) {
          student.studentform.genderVal = this.value;
          //console.log(student.studentform);
        }
      });
      if (this.checked) {
        student.studentform.genderVal = this.value;
        //console.log(student.studentform);
      }
    });

    student.marksEle = [];
    for (
      let index = 0;
      index < document.getElementsByName(marksName).length;
      index++
    ) {
      student.marksEle.push(document.getElementsByName(marksName)[index]);
      //console.log(document.getElementsByName(marksName)[index]);
    //   document
    //     .getElementsByName(marksName)
    //     [index].addEventListener("blur", function () {
    //       //console.log(this.value,this);
    //     });
    }
    student.studentform.marksEle = document.getElementsByName(marksName);

    student.submitButton = document.getElementById(submitButtonId);
    student.tableBody = document.getElementById(tableBody);
  },

  displaystudentForm: function () {
    if (
      typeof student.studentList !== "undefined" &&
      student.studentList !== null
    ) {
        student.tableBody.innerHTML = "";
        let body = "";
      //console.log(student.studentList);
      for (let index = 0; index < student.studentList.length; index++) {
        const element = student.studentList[index];
        
        body +=
          "<tr item=" +
          index +
          "><td> " +
          element.id +
          " </td><td>" +
          element.name +
          "</td>" +
          "<td>" +
          element.email +
          "</td>" +
          "<td>" +
          element.gender +
          "</td>" ;

        for (let index = 0; index < element.marks.length; index++) {
            const element2 = element.marks[index];
            body += "<td>" +element2+"</td>" ;
        }          
          body += "<td>" +
          element.total +
          "</td>" +
          "<td>" +
          element.avg +
          "</td>" +
          "<td>" +
          element.grade +
          "</td>" +
          "<td>";
      }
      // var deletebutton = document.getElementsByClassName('del');
      // for (let index = 0; index < deletebutton.length; index++) {
      //     const element = deletebutton[index];
      //     element.addEventListener('click', todoApp.selectDel);
      // }
      student.tableBody.innerHTML = body;
    }
},

  totalGen: function (marks) {
    let total = 0;
    marks.forEach((x) => (total += parseInt(x)));
    return total;
  },

  avgGen: function (marks) {
    let total = 0;
    avgval = marks.length;
    marks.forEach((item) => {
      total += item;
      avg = total / avgval;
      avg = avg.toFixed(2);
    });
    return avg;
  },

  gradeGen: function (marks) {
    let total = 0;
    avgval = marks.length;
    marks.forEach((item) => {
      total += item;
      avg = total / avgval;
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
  },

  addstudentForm: function () {
    const marksData = [];
    student.studentform.marksEle.forEach(ele => marksData.push(parseInt(ele.value)));
    const ele = {
      ...student.studentform,
      id: student.studentList.length + 1,
      name: student.nameEle.value,
      email: student.emailEle.value,
      gender: student.studentform.genderVal,
      marks: marksData,
      total: student.totalGen(marksData),
      avg: student.avgGen(marksData),
      grade: student.gradeGen(marksData),
    };

    student.studentList.push(ele);

    console.log(student.studentList);
    // marks :student.marksEle.value}
    student.nameEle.value = "";
    student.emailEle.value = "";
    student.genderEle.value = "";
    student.marksEle.value = "";

    //student.resetStudentform();
    student.displaystudentForm();
  },

  studentReg: function () {
    student.submitButton.addEventListener("click", student.addstudentForm);
  },
};
