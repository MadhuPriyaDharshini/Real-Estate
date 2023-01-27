const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.getElementById("container")

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});


/*signUpBtn.addEventListener("click", () => {
	container.classList.remove("left-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});*/

signInBtn.addEventListener("click", () => {
	container.classList.add("left-panel-active");
});
/*

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());*/
