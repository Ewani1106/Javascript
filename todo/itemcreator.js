const item = {
  itemform: {
    id: "",
    name: "",
    qty: "",
    price: "",
    itemtotal: "",
    complete: false,
  },
  total: 0,
  totalgst: 0,
  resetItemform: function () {
    item.studentform = {
      id: "",
      name: "",
      qty: "",
      price: "",
      itemtotal: "",
      complete: false,
    };
    total: 0;
    totalgst: 0;
  },

  nameEle: null,
  qtyEle: null,
  priceEle: null,

  itemList: [],
  submitButton: null,
  checkoutButton: null,
  tableBody: null,
  tableBodyCheckout: null,

  init: function (itemName, qtyName, priceName, submitButtonId, checkoutButtonId, tableBody , tableBodyCheckout) {
    item.nameEle = document.getElementsByName(itemName)[0];
    item.qtyEle = document.getElementsByName(qtyName)[0];
    item.priceEle = document.getElementsByName(priceName)[0];

    item.submitButton = document.getElementById(submitButtonId);
    item.checkoutButton = document.getElementById(checkoutButtonId);
    item.tableBody = document.getElementById(tableBody);
    item.tableBodyCheckout = document.getElementById(tableBodyCheckout);
  },

  displayitemForm: function () {

    const tableSelector = document.querySelector('.table-mode');
    tableSelector.style.display = "block";

    if (typeof item.itemList !== "undefined" && item.itemList !== null) {
      item.tableBody.innerHTML = "";
      let body = "";

      for (let index = 0; index < item.itemList.length; index++) {
        const element = item.itemList[index];

        body +=
          "<br/><tr item=" +
          index +
          "><td> " +
          element.id +
          " </td><td>" +
          element.name +
          "</td>" +
          "<td>" +
          element.qty +
          "</td>" +
          "<td>" +
          element.price +
          "</td>" +
          "<td>" +
          element.itemtotal +
          "</td>" +
          "<td>" +
          "</td></tr>";
      }

      //   var deletebutton = document.getElementsByClassName('del');
      //   for (let index = 0; index < deletebutton.length; index++) {
      //       const element = deletebutton[index];
      //       element.addEventListener('click', item.selectDel);
      //   }

      // body +=
      //   // "<span><button class='checkout'" +
      //   // ">CHECKOUT</button>" +
      //   // "</span>" +
      //   "</td></tr>";
      item.tableBody.innerHTML = body;
    }
    
    // var checkoutButton = document.getElementsByClassName("checkout");
    // for (let index = 0; index < checkoutButton.length; index++) {
    //   const element = checkoutButton[index];
    //   element.addEventListener("click", item.selectCheckout);
    // }
  },

  selectCheckout: function(){

    item.totalGst();
    const tablecheckoutSelector = document.querySelector('.tablecheckout-mode');
    tablecheckoutSelector.style.display = "block";
    item.tableBodyCheckout.innerHTML = "";
    let body = "";
    // console.log(item.total);
    // console.log(item.totalgst);
    body +=
    "<br/><tr><td> " +
    item.total + "</td>" +
    "<td>" + item.totalgst +
    "</td></tr>";
    item.tableBodyCheckout.innerHTML = body;
   },


  totalGen: function (a,b) {
    item.total += parseInt(a) * parseInt(b);
    return item.total;
  },

  totalGst: function() {
    item.totalgst = item.total * 0.18;
    item.totalgst = item.totalgst.toFixed(2);
  },

  additemForm: function () {
  
    const ele = {
      ...item.itemform,
      id: item.itemList.length + 1,
      name: item.nameEle.value,
      qty: item.qtyEle.value,
      price: item.priceEle.value,
      itemtotal: parseInt(item.qtyEle.value) * parseInt(item.priceEle.value),
    };
    item.totalGen(ele.qty,ele.price);

    item.itemList.push(ele);

    //console.log(item.itemList);

    item.nameEle.value = "";
    item.qtyEle.value = "";
    item.priceEle.value = "";
    item.itemtotal = "";
    item.totalgst = "";

    //student.resetStudentform();

    item.displayitemForm();
  },


  // const tableButton = document.querySelector('.submit');
  // const tableCheckoutButton = document.querySelector('.checkout');

  //   const changeMode = function(event){
  //     event.preventDefault();
  //     let b = this.getAttribute('table-mode');
    
  //     const tableSelector = document.querySelector('.table-mode')
  //     const tablecheckoutSelector = document.querySelector('tablecheckout-mode');
      
  //     if(b !== null){
  //       tableSelector.style.display = "none";
  //       tablecheckoutSelector.style.display = "block";
  //     }else{
  //       tableSelector.style.display = "block";
  //       tablecheckoutSelector.style.display = "none";
  //     }
  //   };


  itemReg: function () {
    item.submitButton.addEventListener("click", item.additemForm);
  },

  itemCheckout: function() {
    item.checkoutButton.addEventListener("click", item.selectCheckout);
  }
};
