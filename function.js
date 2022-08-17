function display(){

}

console.log(display());

function display(name){
    console.log("Hello ",name);
}

display("sumit");


function display(name,age){
    console.log("Hello ",name);
    console.log("Hello ",age);
}
display("sumit",10);


function display(name,age){
    console.log("Hello ",name);
    console.log("Hello ",age);
    return 0;
}
a = display("sumit",10);
console.log(display("sumit",10));


function display(name,age){

    function displayName(name){
        console.log(name);
    }

    function displayAge(age){
        console.log(age);
    }

    displayName(name);
    displayAge(age);
}

display("amit",29);
console.log(display);
const displayStudent = (name,age) => {
     display(name,age);
 };

// function displayStudent(name,age){

//     function displayName(name){
//         console.log(name);
//     }

//     function displayAge(age){
//         console.log(age);
//     }

//     displayName(name);
//     displayAge(age);
// }

const calc = (func,a,b) => {
    func(a,b);
};

const add = (a,b) => {
    // console.log(a+'+'+b+'='+(a+b));
    console.log(a+'+'+b+'='+(a+b));
};

calc(add,10,20);

const h1 = document.getElementById('eventHandling');
const removeClick = document.getElementById('removeClick');
const actionH1= (event) => {
    alert("Hello H1");
};

const gender = document.querySelectorAll('[name="gender"]');
const text = document.querySelector('[type="text"]');
const textValue = document.getElementById('textValue');
const genderValue = document.getElementById('genderValue');
h1.addEventListener('click',actionH1);


removeClick.addEventListener('click',function(){
    h1.removeEventListener('click',actionH1);
});

gender.forEach(element => {
    element.addEventListener('change',function(event){
        genderValue.innerHTML = event.target.value;
        console.log(event);
    });    
});


text.addEventListener('keyup',function(event){
    console.log(event);
    textValue.innerHTML = event.target.value;
})

text.addEventListener('focus',function(event){
    console.log(event);
})

text.addEventListener('blur',function(event){
    console.log(event);
    textValue.innerHTML = event.target.value;
})