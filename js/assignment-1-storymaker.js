// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1Button = document.querySelector("#noun1");
var verbButton = document.querySelector("#verb");
var adjectiveButton = document.querySelector("#adjective");
var noun2Button = document.querySelector("#noun2");
var settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
var chosenNoun1 = document.querySelector("#chosenNoun1");
var chosenVerb = document.querySelector("#chosenVerb");
var chosenAdjective = document.querySelector("#chosenAdjective");
var chosenNoun2 = document.querySelector("#chosenNoun2");
var chosenSetting = document.querySelector("#chosenSetting");

// Constants for final buttons and p tags
var playbackButton = document.querySelector("#playback");
var randomButton = document.querySelector("#random");
var resetButton = document.querySelector("#reset");

var storyParagraph = document.querySelector("#story");
// Variables for pre-defined arrays
var noun1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;

//add student name/number somewhere
var studentNameButton = document.querySelector("#studentName");

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  //change to purple on click
  //variable to move through the array based on the above count variable for noun1. Don't forget noun1Count represents the index of the noun1 array.
  chosenNoun1.textContent = noun1[noun1Count];
  // if to increase the noun1Count based on the current position in the array
  if (noun1Count < noun1.length - 1) {
    noun1Count++;
    //changing the colour based on the See'N'Say book
    document.body.style.background = "purple"; //got this from Stack OverFlow https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
  } //else to reset the count back to 0 when it reaches the end of the array
  else {
    noun1Count = 0;
  }
}

function verb_on_click() {
  //change to sky blue on click
  chosenVerb.textContent = verb[verbCount];
  // if to increase the count based on the current position in the array
  if (verbCount < verb.length - 1) {
    verbCount++;
    //changing the colour based on the See'N'Say book
    document.body.style.background = "lightBlue";
  } //else to reset the count back to 0 when it reaches the end of the array
  else {
    verbCount = 0;
  }
}

function adjective_on_click() {
  //change to light green on click
  chosenAdjective.textContent = adjective[adjectiveCount];
  // if to increase the count based on the current position in the array
  if (adjectiveCount < adjective.length - 1) {
    adjectiveCount++;
    //changing the colour based on the See'N'Say book
    document.body.style.background = "lightGreen";
  } //else to reset the count back to 0 when it reaches the end of the array
  else {
    adjectiveCount = 0;
  }
}

function noun2_on_click() {
  //change to orange on click
  chosenNoun2.textContent = noun2[noun2Count];
  // if to increase the count based on the current position in the array
  if (noun2Count < noun2.length - 1) {
    noun2Count++;
    //changing the colour based on the See'N'Say book
    document.body.style.background = "orange";
  } //else to reset the count back to 0 when it reaches the end of the array
  else {
    noun2Count = 0;
  }
}

function setting_on_click() {
  //change to magenta on click
  chosenSetting.textContent = setting[settingCount];
  // if to increase the count based on the current position in the array
  if (settingCount < setting.length - 1) {
    settingCount++;
    document.body.style.background = "magenta";
  } //else to reset the count back to 0 when it reaches the end of the array
  else {
    settingCount = 0;
  }
}

// concatenate the user story and display
function playback_on_click() {
  //displaying the user generated story based on the selected elements. Initially only had the element and no .textContent, but that didn't work, so I added the .textContent after looking at the lectures again.
  storyParagraph.textContent = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
  document.body.style.background = "yellow";
}

// grabbing random element from arrays, concatenate and display
// for randomize https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function random_on_click() {
  document.body.style.background = "red";
  //randomize for noun1
  noun1Count = Math.floor(Math.random() * noun1.length);
  selectedNoun1 = noun1[noun1Count];
  chosenNoun1.textContent = selectedNoun1;
  //randomize for verb
  verbCount = Math.floor(Math.random() * verb.length);
  selectedVerb = verb[verbCount];
  chosenVerb.textContent = selectedVerb;
  //randomize for adjective
  adjectiveCount = Math.floor(Math.random() * adjective.length);
  selectedAdjective = adjective[adjectiveCount];
  chosenAdjective.textContent = selectedAdjective;
  //randomize for noun2
  noun2Count = Math.floor(Math.random() * noun2.length);
  selectedNoun2 = noun2[noun2Count];
  chosenNoun2.textContent = selectedNoun2;
  //randomize for setting
  settingCount = Math.floor(Math.random() * setting.length);
  selectedSetting = setting[settingCount];
  chosenSetting.textContent = selectedSetting;
}

//restting the page on reset
function reset_on_click() {
  chosenNoun1.textContent = "";
  chosenVerb.textContent = "";
  chosenAdjective.textContent = "";
  chosenNoun2.textContent = "";
  chosenSetting.textContent = "";
  storyParagraph.textContent = "";
}

//function for adding student name
function add_student_name_on_click() {
  studentName.textContent = "Jamie MacDonald";
}

/* Event Listeners
-------------------------------------------------- */
//noun, verb, adj, noun2, setting button event listeners
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

//story, random, reset button event listeners
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);

//student name button
studentNameButton.addEventListener("click", add_student_name_on_click);

