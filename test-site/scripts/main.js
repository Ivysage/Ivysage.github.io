const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vegan.png") {
    myImage.setAttribute("src", "images/vegan-anime.png");
  } else {
    myImage.setAttribute("src", "images/vegan.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Ivy's & ${myName}'s Place`;
      }
  }
  
if (!localStorage.getItem("name")) {
    // setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Ivy's & ${storedName}'s Place`;
}

myButton.onclick = () => {
    setUserName();
  };
  