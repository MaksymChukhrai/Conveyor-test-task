// Get the "Custom" button
const customButton = document.querySelector(".custom-in .btn-width");

const conveyorBeltTitle = document.querySelector(".conveyor-belt-title");

// Add event handler for clicking the "Custom" button
customButton.addEventListener("click", () => {
  // Check if the conveyor-belt-title block has the is-hidden class
  const isHidden = conveyorBeltTitle.classList.contains("is-hidden");

  // If the is-hidden class exists, remove it, otherwise add it
  if (isHidden) {
    conveyorBeltTitle.classList.remove("is-hidden");
  } else {
    conveyorBeltTitle.classList.add("is-hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const lengthResult = document.querySelector(".length-result");
  const btnDecr = document.querySelector(".btn-decrement");
  const btnIncr = document.querySelector(".btn-increment");

  let lengthValue = 1;

  function updateLengthValue() {
    lengthResult.textContent = lengthValue + '"';
  }

  btnDecr.addEventListener("click", function () {
    if (lengthValue > 1) {
      lengthValue--;
      updateLengthValue();
    }
  });

  btnIncr.addEventListener("click", function () {
    lengthValue++;
    updateLengthValue();
  });
});
