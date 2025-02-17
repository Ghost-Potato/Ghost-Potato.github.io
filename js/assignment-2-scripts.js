// constants for query selector
var id = document.querySelector("p");
var num = document.querySelector("#customNumber");
var custBtn = document.querySelector(".custColor");
var randBtn = document.querySelector(".randColor");
var imgSel = document.querySelector("#imageSelect");
var img = document.querySelectorAll("img"); //to store the images src and alt in an array

// function to change bg color from user input and add student id
function changeCustomColor() {
  //display student id in p tag
  id.textContent = "Student ID: 1259859";
  //using an if/else ladder for all the color options
  //grabbing the value of num and converting it to a number as it is only an element of the HTML right now
  var numValue = Number(num.value);
  //red is less than 0 or > 100
  if (numValue < 0 || numValue > 100) {
    document.body.style.backgroundColor = "red";
  }
  //green is between 0 and 20
  else if (numValue >= 0 && numValue < 20) {
    document.body.style.backgroundColor = "green";
  }
  //blue is 20-40
  else if (numValue >= 20 && numValue < 40) {
    document.body.style.backgroundColor = "blue";
  }
  //orange is 40-60
  else if (numValue >= 40 && numValue < 60) {
    document.body.style.backgroundColor = "orange";
  }
  //purple is 60-80
  else if (numValue >= 60 && numValue < 80) {
    document.body.style.backgroundColor = "purple";
  }
  //80-100 is yellow
  else {
    document.body.style.backgroundColor = "yellow";
  }
}

// function to change bg color from random no.
function changeRandomColor(number) {
    //creating the random number
    var randomNum = Math.floor(Math.random()*(number + 1)); //randomizes and rounds to the nearest integer
    changeCustomColor(randomNum);
    return randomNum;
}

// function to generate options for select list
function addList() {
  // Tip: you might have to check length condition so that the list does not keep growing when clicked
  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
}

// function to change image
function changeImage() {}

// event listeners for on click event of buttons and select
custBtn.onclick = changeCustomColor;
randBtn.onclick = changeRandomColor;

// event listeners for on change event of select