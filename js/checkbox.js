//js\checkbox.js

const checkboxInputs = document.querySelectorAll(".visually-hidden");

checkboxInputs.forEach(checkboxInput => {
  const checkboxIcon = checkboxInput.parentElement.querySelector(".checkbox-icon img");

  checkboxInput.addEventListener("change", event => {
    if (event.target.checked) {
      checkboxIcon.src = "/img/icons/Checkbox_cheked.png";
    } else {
      checkboxIcon.src = "/img/icons/Checkbox.png";
    }
  });
});
