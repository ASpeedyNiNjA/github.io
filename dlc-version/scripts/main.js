// Image switcher code

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sizing.png") {
    myImage.setAttribute("src", "images/skull-max.png");
  } else {
    myImage.setAttribute("src", "images/sizing.png");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = `DLC is cool, ${myName}`;
 }
 
 if (!localStorage.getItem("name")) {
	setUserName();
 } else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `DLC is cool, ${storedName}`;
 }
 
 myButton.onclick = () => {
	setUserName();
 };
 
// Supposed to delete the popular one Null but I refuse.
/*
function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
	  setUserName();
	} else {
	  localStorage.setItem("name", myName);
	  myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
 }
*/ 