const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const inputValue = input.value.trim();
  const inputLength = input.getAttribute("data-length");

  if (inputValue.length === Number(inputLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});