// constants for query selector
var id = document.querySelector("p");
var num = document.querySelector("#customNumber");
var custBtn = document.querySelector("#");
var imgSel = document.querySelector("#imageSelect");
var img = document.querySelectorAll("img"); //to store the images src and alt in an array

// function to change bg color from user input and add student id
function changeCustomColor() {
  //using an if/else ladder for all the color options
  //red is less than 0 or > 100
  if (num < 0 || num > 100) {
    document.body.style.backgroundColor = "red";
  }
  //green is between 0 and 20
  else if (num >= 0 && num < 20) {
    document.body.style.backgroundColor = "green";
  }
  //blue is 20-40
  else if (num >= 20 && num < 40) {
    document.body.style.backgroundColor = "blue";
  }
  //orange is 40-60
  else if (num >= 40 && num < 60) {
    document.body.style.backgroundColor = "orange";
  }
  //purple is 60-80
  else if (num >= 60 && num < 80) {
    document.body.style.backgroundColor = "purple";
  }
  //80-100 is yellow
  else {
    document.body.style.backgroundColor = "yellow";
  }
}

// function to change bg color from random no.
function changeRandomColor() {}

// function to generate options for select list
function addList() {
  // Tip: you might have to check length condition so that the list does not keep growing when clicked
  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
}

// function to change image
function changeImage() {}

// event listeners for on click event of buttons and select

// event listeners for on change event of select
