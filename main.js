const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    }
    ,
    {
        id: 2,
        text: 'Metting w boss',
        isCompleted: true
    }
    ,
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
// console.log(todos[1].text);

//////// JSON ////////
const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//////// For ////////
for (let i=0; i<=10; i++){
  //console.log(i);
}

//////// While ////////
let i=0;
while( i < 10){
    //console.log(`While loop number: ${i}`);
    i++;
}

//////// Loops & Arrays: ////////
for (let todo of todos){
    //console.log(todo);
    //console.log(todo.text);
}

//////// High Order Array Methods: ////////

//forEach
todos.forEach(function (todo){
    //console.log(todo.text);
});

//Map > array
const todoText = todos.map(function (todo){
    return todo.text;
});
//console.log(todoText);

//Filter
const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted === true;
}).map(function (todo){
    return todo.text;
})
//console.log(todoCompleted);

//////// Ternary Operator ////////
const x = 11;
const color = x > 10 ? 'red' : 'blue';
// console.log('color');

//////// Switch ////////
switch(color){
    case 'red':
        // console.log('color is red');
        break;
    case 'blue':
        // console.log('color is blue');
        break;
    default:
        // console.log('color is NOT red or blue');
        break;
}

//////// Functions ////////
function addNums(num1 = 1, num2 = 1){ 
    return num1 + num2;
}
// console.log(addNums(5,5));

const addNums2 = (num1 = 1, num2 = 1) => num1+num2; // Add easier than a function
// console.log(addNums2(8,8));

//////// OOP ////////
// Constructor Function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // Option 1
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }
// Prototype - Option 2
    // Person.prototype.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // Person.prototype.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }


//Class - Option 3: Same as Constructor Function and Prototype (Option 2)
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);  
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
}

// Instanciate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '11-16-1997');
// console.log(person2.dob.getFullYear());

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1);
// console.log(person2.getFullName());


//////// DOM ////////
//Window: parent object of the browser
// console.log(window); //Look at console all of the functions

//Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container')); //Most recommended

//Multiple elements
// console.log(document.querySelectorAll('.item')); // Most recommended /newer 
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// ul.remove(); //Delete all
// ul.lastElementChild.remove(); //Delete the last item
// ul.firstElementChild.textContent = 'Hello'; //Change the name 
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
const btn = document.querySelector('.btn');
// btn.style.background = 'red'; //Manipulate the interface in real time

// EVENTS

// Mouse Event
btn.addEventListener('mouseover', e => {
    e.preventDefault();
    // console.log(e.target.className);
    // document.getElementById('my-form').style.background = '#ccc'; // Also .querySelector('#my-form')
    // document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Changed</h1>';
    // ul.lastElementChild.innerHTML = '<h1>Changed</h1>'; //Another way but using line 158 ul
  });

  // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });

// USER FORM SCRIPT

//////// Put DOM elements into variables ////////
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '') {
      // alert('Please enter all fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    } else {
      // Create new list item with user
      const li = document.createElement('li');
  
      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);
  
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
  }