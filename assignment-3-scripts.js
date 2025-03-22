//crust variable - getting the value of all 3 elements and storing them in their own variables
let crust = document.getElementById("pizza-crust").value;
//sauce variable
let sauce = document.getElementById("pizza-sauce").value;
//cheese variable
let cheese = document.getElementById("pizza-cheese").value;
//topping variable - only grabs the checked inputs in an array 'topping' and then the map and value function should create a new array of toppings with just the selcted values.
let toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((topping) => topping.value);

//place order button variable
let orderBtn = document.getElementById("order");
//about variables
let about = document.getElementById("about");
let studentName = "Jamie MacDonald";
let studentNumber = "1259859";

//EVENT LISTENERS

//event listener for place order button
orderBtn.addEventListener("click", orderReadout);

//event listener for About button
about.addEventListener("click", displayStudent);

//CLASS
class Pizza {
  constructor(crust, sauce, cheese, toppings) {
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
  }
  //function to display the description for the pizza
  description() {
    return `A ${this.crust} crust with ${this.sauce} sauce, ${this.cheese} cheese, and these toppings: ${this.toppings.join(", ")}. `;
  }
}

//FUNCTIONS

//function to read the order out
function orderReadout(e) {
  e.preventDefault(); //to stop the button submitting the order
  let order = new Pizza(crust, sauce, cheese, toppings);
  let output = document.getElementById("order-readout");
  output.textContent = order.description();
}

//display student info function when About button gets pressed
function displayStudent() {
  window.alert(`${studentName} with student number: ${studentNumber}`);
}
