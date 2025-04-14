//the api base url and the api key
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "PCy2MaeWOq6MHiKhD8Nz9EhVbDNrYjASzNaauBBH";
//storing all necessary the DOM/HTML elements in variables
const dateInput = document.getElementById("date-input");
const media = document.getElementById("media"); //this is a section id, need it to create img or iframe
const title = document.getElementById("title");
const date = document.getElementById("date");
const explanation = document.getElementById("explanation");
const copyright = document.getElementById("copyright");
//student name and id paragraph
const student = document.getElementById("student");

//Event listener for date-input change
dateInput.addEventListener("change", fetchResults);

//FUNCTIONS
//function to fetch results from the api
function fetchResults() {
  //update the url to add the api key and the date value
  const selectedDate = dateInput.value;
  const url = `${baseUrl}${apiKey}&date=${selectedDate}`;
  //using a try catch for debugging. Catch will output the error message to console log
  console.log("Fetching from:", url);
  try {
    fetch(url)
      .then((response) => response.json()) //response will return as json file
      .then((json) => displayPictures(json)); //this calls on the display picture function below to display the picture and it's captions by extracting data from the response json file
  } catch (error) {
    console.log("Error: ", error);
  }
}
//function to display results and student information
function displayPictures(json) {
  //debugging purpose
  console.log(json);
  //if the media_type is an image, create an image element and then append it to the section. Else: create iframe and append it to the section
  if (json.media_type == "image") {
    const image = document.createElement("img");
    media.appendChild(image);
    //if the image url is hdurl or url, create the correct path;
    if (json.hasOwnProperty("hdurl")) {
      image.src = json.hdurl;
    } else {
      image.src = json.url;
    }
  } else if (json.media_type == "video") {
    //create an iframe element, append the element to the section, then append the path to the video
    const video = document.createElement("iframe");
    media.appendChild(video);
    video.src = json.url;
  }
  //adding the text content for the 3 figcaptions
  title.textContent = "Title: " + json.title;
  date.textContent = "Date: " + json.date;
  explanation.textContent = "Explanation: " + json.explanation;
  //checking if the copyright property is in the json response
  if (json.hasOwnProperty("copyright")) {
    copyright.textContent = "Copyright: " + json.copyright;
  } else {
    copyright.textContent = "";
  }
  console.log("Title:", json.title);
  console.log("Date:", json.date);
  console.log("Explanation:", json.explanation);
  console.log("Copyright:", json.copyright);
  student.textContent = "Jamie MacDonald, 1259859";
}
