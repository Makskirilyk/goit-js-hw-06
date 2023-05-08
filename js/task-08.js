const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
event.preventDefault();

const formData = new FormData(loginForm); 
const userData = Object.fromEntries(formData.entries()); 

if (!userData.email || !userData.password) { 
alert("Всі поля повинні бути заповнені!");
} else {
console.log(userData); 
loginForm.reset(); 
}
});
