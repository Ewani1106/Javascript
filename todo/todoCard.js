const todoCard = {
    // single: {
    //   id: 0,
    //   taks: "",
    //   complete: false,
    // },
    // resetSingle: function () {
    //   todo.single = {
    //     id: 0,
    //     taks: "",
    //     complete: false,
    //   };
    // },
  
    inputEle: null,
    listItems: [],
    submitButton: null,
    cardBody: null,
    
    init: function (inputName, submitButtonId, cardBody) {
      todoCard.inputEle = document.getElementsByName(inputName)[0];
      todoCard.submitButton = document.getElementById(submitButtonId);
      todoCard.cardBody = document.getElementById(cardBody);
    },
  
    selectEdit: function(){
      var itemNum = parseInt(this.getAttribute("item"));
      todoCard.inputEle.setAttribute('item',itemNum);
      todoCard.inputEle.value = todoCard.listItems[itemNum];
    },
  
    selectDel: function () {
      var itemNum = parseInt(this.getAttribute("item"));
      todoCard.listItems.splice(itemNum, 1);
      this.parentNode.remove();
      todoCard.displayItems();
    },
    displayItems: function () {
      if (typeof todoCard.listItems !== "undefined" && todoCard.listItems !== null) {
        todoCard.tableBody.innerHTML = "";
        console.log(todoCard.listItems);
        for (let index = 0; index < todoCard.listItems.length; index++) {
          const element = todoCard.listItems[index];
          todoCard.cardBody.innerHTML +=
          "<p class='todo-item'><span class='item' item=" +
          index +
          ">" +
          element +
          "</span><button class='edit' item=" +
          index +" >+</button>"+
          "<button class='del' item=" +
          index +">x</button></p>";
        }
        var editButton = document.getElementsByClassName("edit");
        var deletebutton = document.getElementsByClassName("del");
        for (let index = 0; index < editButton.length; index++) {
          const element = editButton[index];
          element.addEventListener("click", todoCard.selectEdit);
        }
        for (let index = 0; index < deletebutton.length; index++) {
          const element = deletebutton[index];
          element.addEventListener("click", todoCard.selectDel);
        }
      }
    },
    addTodoItem: function() {
        if (typeof todoCard.inputEle.value !== 'undefined' && todoCard.inputEle.value !== null && todoCard.inputEle.value !== '') {
            if (todoCard.listItems.indexOf(todoCard.inputEle.value) == -1) {
                todoCard.listItems.push(todoCard.inputEle.value);
                todoCard.inputEle.value = "";
                todoCard.displayItems();
            } else {
                jsvalidation.customValidation(todoCard.inputEle, 'Already Added!', 'error');
            }
        }
    },
  
    todoCardReg: function () {
      todoCard.submitButton.addEventListener("click", todoCard.addTodoItem);
    },
  
  };