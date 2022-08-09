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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

//close modal
const closeModalBtn = document.querySelector(".close");

function closeModal() {
  modalbg.style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);

//error message
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");

function textErrorMessage(event, regex, nbr) {  
  const inputTarget = document.querySelectorAll(".formData input")[nbr];
  const errorMessage = document.querySelectorAll(".error-message")[nbr];  
    if (regex.test(event.target.value)){
      inputTarget.style.border = "none";
    errorMessage.style.display = "none";
  }else{
    inputTarget.style.border = "2px solid #FF4E60";     
    errorMessage.style.display = "block";   
  }
};

first.addEventListener("change", function errorMessage (event){
  textErrorMessage(event, /\w{2,}/, 0);
});

last.addEventListener("change", function errorMessage (event){
  textErrorMessage(event, /\w{2,}/, 1);
});

email.addEventListener("change", function errorMessage (event){
  textErrorMessage(event, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 2);
});


/*const errorMessage = document.createElement("p");  
  document.querySelector(".formData").appendChild(errorMessage);
  errorMessage.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  errorMessage.style.display = "none";*/