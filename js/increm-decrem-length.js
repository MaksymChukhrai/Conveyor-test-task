document.addEventListener("DOMContentLoaded", function () {
  // Get the increment and decrement buttons
  const incrButton = document.querySelector(".btn-incr-length");
  const decrButton = document.querySelector(".btn-decr-length");
  const lengthResult = document.querySelector(".js-length-result");

  // Set initial value
  let lengthValue = 10;

  // Function to update the value and display the result
  function updateLength() {
    lengthResult.textContent = ` ${lengthValue}"`;
  }

  // Increment button click handler
  incrButton.addEventListener("click", function () {
    lengthValue += 5;
    updateLength();
  });

  // Decrement button click handler
  decrButton.addEventListener("click", function () {
    // The value must not be less than 0
    if (lengthValue >= 5) {
      lengthValue -= 5;
      updateLength();
    }
  });

  updateLength();
});
