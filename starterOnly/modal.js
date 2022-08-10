function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const form = document.querySelector(".modal-body form");
console.log(modalBody , form)
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

//close modal


function closeModal() {
  modalbg.style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);

//error message

function textErrorMessage(event, regex, index) {  
  const inputTarget = document.querySelectorAll(".formData input")[index];
  const errorMessage = document.querySelectorAll(".error-message")[index];  
    if (regex.test(event.target.value)){
      inputTarget.style.border = "none";
    errorMessage.style.display = "none";
  }else{
    inputTarget.style.border = "2px solid #FF4E60";     
    errorMessage.style.display = "block";   
  }
};

const regexAtLeastTwoLetters = /\w{2,}/;
const regexEmailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

first.addEventListener("input", function errorMessage(event) {
  textErrorMessage(event, regexAtLeastTwoLetters, 0);
});

last.addEventListener("input", function errorMessage(event) {
  textErrorMessage(event, regexAtLeastTwoLetters, 1);
});

email.addEventListener("input", function errorMessage(event) {
  textErrorMessage(event, regexEmailFormat, 2);
});

//sending confirmation

form.addEventListener("submit", function confirmation(event) {
event.preventDefault();
form.style.opacity = "0";
});

