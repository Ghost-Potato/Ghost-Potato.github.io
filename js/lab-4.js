/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

//can only use double quotes("") in JSON. Single quotes will throw an error
//async () --> fetching data while still displaying page to the user
//no commenting in JSON. Keeps it lightweight

// STEP 3a: Create the asynchronous function populate()

async function populate() {
  //how to make an async function

  // Introducing JavaScript Object Notation (JSON): https://json.org/
  // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
  // STEP 4b: Store the URL of a JSON file in a variable */

  const url = "https://ghost-potato.github.io/js/lab-4.js";

  // STEP 5: Use the new URL to create a new request object

  const request = new Request(url);
  console.log(request); //debug

  // STEP 6: Make a network request with the fetch() function, which returns a Response object

  const response = await fetch(request); //waits for the fetch request to finish
  console.log(response); //status: 200 = successful request; 404 : not found = unsuccessful request

  // STEP 7: Capture the returned Response object and covert to a JSON object using json()

  const responseJson = await response.json(); //variable.json

  // STEP 8: Output the iScream JSON object to the console

  console.log(responseJson);

  // STEP 9a: Invoke the populateHeader function here, then build it below
  populateHeader(responseJson);
  // STEP 10a: Invoke the showTopFlavors function here, then build it below
  showTopFlavours(responseJson);
}

// STEP 3b: Call the populate() function

populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonBody) {
  // Create the H1 element

  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // Grab the company name from the JSON object and use it for the text node

  h1.textContent = jsonBody.companyName;
  p.textContent = `Head Office: ${jsonBody.headOffice}, est.${jsonBody.established} - Active: ${jsonBody.active ? "Yes" : "No"}`;

  // Inject the complete H1 element into the DOM, inside the HEADER

  header.appendChild(h1);
  header.appendChild(p);
}
/* STEP 10b: Assemble the showTopFlavors() function */

function showTopFlavours(jsonBody) {
  // STEP 10c: Bind the JSON topFlavors object to a var

  let topFlavours = jsonBody.topFlavours;

  // STEP 10d: Loop through the topFlavors object

  for (let i = 0; i < topFlavours.length; i++) {
    console.log(topFlavours[i]);

    // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list

    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let image = document.createElement("img");
    let list = document.createElement("ul"); //could also do "ol" for lists

    // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
    h2.textContent = topFlavours[i].name;
    p1.textContent = `Calories: ${topFlavours[i].calories}`;
    p2.textContent = `Type: ${topFlavours[i].type}`;

    image.setAttribute("src", topFlavours[i].image);

    // STEP 10g: Build a loop for the ingredients array in the JSON
    let ingredients = topFlavours[i].ingredients;
    for (let j = 0; j < ingredients.length; j++) {
      console.log(ingredients);
      let listItem = document.createElement("li");
      listItem.textContent = ingredients[j];
      list.appendChild(listItem);
    }
    // STEP 10i: Append each complete ARTICLE element to the SECTION element
    article.appendChild(h2);
    article.appendChild(h2);
    article.appendChild(h2);
    article.appendChild(list);
    article.appendChild(image);

    section.appendChild(article);
  }

  // STEP 11: Add a 3rd flavour of ice cream to the local JSON file, making use of the /images/strawberry-sprinkle.svg image
}
// Lab: Extend the JavaScript application built in class to include two more flavors of ice cream.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
