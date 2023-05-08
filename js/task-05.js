const nameOutput = document.querySelector('#name-output')
const nameInput = document.querySelector('name-input')
nameInput.addEventListener("input", (event) => {
    const name = event.target.value
    nameOutput.textContent = name ? name : "Anonymous";
  });