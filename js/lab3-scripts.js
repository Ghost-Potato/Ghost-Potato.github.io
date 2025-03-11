// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
let output = document.getElementById("output");

function Hamburger(bun, isBeef, sauce, qtyPickles, qtyOnions) {
  this.bun = bun;
  this.isBeef = isBeef;
  this.beef = isBeef ? "beef" : "vegetarian";
  this.sauce = sauce;
  this.qtyPickles = qtyPickles;
  this.qtyOnions = qtyOnions;
  this.describe = function () {
    return `A ${this.beef} burger on a ${this.bun} bun with ${this.sauce}, ${this.qtyPickles} pickles, and ${this.qtyOnions} onions.`;
  };
}

let burger = new Hamburger("sesame", false, "ketchup", 3, 2);
output.textContent = burger.describe();

/*
      different types of buns,
      vegetable garnishes, 
      assortments of cheeses, 
      specialty sauces, 
      different meat patties(beef, chicken, vegetarian), 
      single, double, or triple patty, 
      Pickles, hot peppers, olives etc.
  */
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
