const input = document.getElementById("email");

const submit = document.getElementById("submit");

const error = document.getElementById("error-message");
const form = document.getElementById("form");

submit.addEventListener("click", () => {
if(/@/.test(input.value) === false){
     error.style.display = "inline";
     input.style.borderColor = "red";
     setTimeout(() => {
      error.style.display = "none";
      input.style.borderColor = "grey";
     }, 7000);
    
} else {
  error.style.display = "none";
  form.action = "index2.html"
}
})

