const noButton = document.getElementById("nobutton");
const yesButton = document.getElementById("yesbutton");
const questionString = document.getElementById("question");
const gif = document.getElementById("gifs");
const myList = ["Sure?","Pwetty Please"," I want you!", "I am sad now ", "Are you really sure??", "Please?", "Pretty please?", "I will be sad", "I will be really sad", "Come on!"," I like you genuinely"
,"it's fun being with you!","I choose you ", "I like you really!!!!", "just say yes!","Valentines yes please!"];
let yesWidth = 20;
let yesHeight = 20;
let yesPadding = 20;

function noBClickEvent() {
  let randomNum = Math.floor(Math.random() * myList.length);
  noButton.innerHTML = myList[randomNum];

  // Increase size of YES button
  yesWidth += 20;
  yesHeight += 20;

  // Set the new size directly
  yesButton.style.width = `${yesWidth}px`;
  yesButton.style.height = `${yesHeight}px`;
}

function yesBClickEvent() {
  gif.src = "thanks.gif";
  yesButton.style.width = `${yesWidth}px`;
  yesButton.style.height = `${yesHeight}px`;
  yesButton.style.paddingTop = "20px"; // Set a fixed padding if needed
  questionString.innerHTML = "Ok Yaaaay !!!";
  noButton.innerHTML = "I knew it !";
}

function yesBClickEvent() {
  gif.src = "thanks.gif";
  yesWidth = 20;
  yesHeight = 20;
  yesButton.style.width = `${yesWidth}px`;
  yesButton.style.height = `${yesHeight}px`;
  questionString.innerHTML = "Ok Yaaaay !!!";
  noButton.innerHTML = "I knew it !";
}
