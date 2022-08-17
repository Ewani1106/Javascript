const todo = {
    single: {
      id: 0,
      tasks: "",
      complete: false,
    },  
    inputEle: null,
    listItems: [],
    submitButton: null,
    tableBody: null,
    
    init: function (inputName, submitButtonId, tableBody) {
      todo.inputEle = document.getElementsByName(inputName)[0];
      todo.submitButton = document.getElementById(submitButtonId);
      todo.tableBody = document.getElementById(tableBody);
  
      // todo.inputEle.addEventListener("blur", todo.inputHandle);
      // // todo.inputEle.addEventListener('change',todo.inputHandle);
      // todo.submitButton.setAttribute("disabled", "true");
    },
    trselectionHandle: function(){
        console.log(this.children[this.children.length-1]);
        var itemNum = parseInt(this.getAttribute("item"));
        todo.listItems[itemNum].complete = !todo.listItems[itemNum].complete;
        console.log(todo.listItems);
        this.children[this.children.length-1].innerHTML = "";
    },
    selectEdit: function(){
      var itemNum = parseInt(this.getAttribute("item"));
      todo.inputEle.setAttribute('item',itemNum);
      todo.inputEle.value = todo.listItems[itemNum].tasks;
    },
  
    selectDel: function () {
      var itemNum = parseInt(this.getAttribute("item"));
      todo.listItems.splice(itemNum, 1);
      this.closest('tr').remove();
      todo.displayItems();
    },
    displayItems: function () {
      if (typeof todo.listItems !== "undefined" && todo.listItems !== null) {
        todo.tableBody.innerHTML = "";
        console.log(todo.listItems);
        for (let index = 0; index < todo.listItems.length; index++) {
          const element = todo.listItems[index];
          let body = "";
          body += "<tr item=" +
          index +"><td> " +(element.id)+ " </td><td>" +
          element.tasks +
          "</td>" +
          "<td>";

          if(!element.complete){
            body+="<span><button class='edit' item=" +
            index +" >+</button>"+
            "<button class='del' item=" +
            index +">x</button></span>";
          }
            body += "</td></tr>";
            todo.tableBody.innerHTML += body;
          //for div code use para also
            // "<p class='todo-item'><span class='item' item=" +
            // index +
            // ">" +
            // element +
            // "</span><button class='edit' item=" +
            // index +" >+</button>"+
            // "<button class='del' item=" +
            // index +">x</button></p>";

        }
        var editButton = document.getElementsByClassName("edit");
        var deletebutton = document.getElementsByClassName("del");
        for (let index = 0; index < editButton.length; index++) {
          const element = editButton[index];
          element.addEventListener("click", todo.selectEdit);
        }
        
        for (let index = 0; index < deletebutton.length; index++) {
          const element = deletebutton[index];
          element.addEventListener("click", todo.selectDel);
        }

        var trselection = document.querySelectorAll('tr[item]');
        for (let index = 0; index < trselection.length; index++) {
            const element = trselection[index];
            element.addEventListener("click", todo.trselectionHandle);
          }
      }
    },
    addTodoItem: function () {
      if (
        typeof todo.inputEle.value !== "undefined" &&
        todo.inputEle.value !== null &&
        todo.inputEle.value !== ""
      ) {
       
          if(todo.inputEle.getAttribute("item")){
            var itemNum = parseInt(todo.inputEle.getAttribute("item"));
            const ele = {...todo.single,id: itemNum+1, tasks :todo.inputEle.value }
            todo.listItems[itemNum] = ele;
            todo.inputEle.removeAttribute('item');  
          }else{
            console.log()
            const ele = {...todo.single, id: (todo.listItems.length)+1, tasks :todo.inputEle.value }
            todo.listItems.push(ele);
          }
  
          todo.inputEle.value = "";
          todo.displayItems();
      }
    },
  
    todoReg: function () {
      todo.submitButton.addEventListener("click", todo.addTodoItem);
    },
  
  };