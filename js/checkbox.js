const checkboxInputs = document.querySelectorAll(".visually-hidden");

// Define the current environment (local or non-local)
const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

// Go through each checkbox and add the event handler
checkboxInputs.forEach((checkboxInput) => {
  // Get the element corresponding to the checkbox icon
  const checkboxIcon = checkboxInput.parentElement.querySelector(
    ".checkbox-icon svg use"
  );

  // Add an event handler to change the checkbox state
  checkboxInput.addEventListener("change", (event) => {
    if (event.target.checked) {
      // Change the icon to the pressed state
      const iconPath = isLocalhost
        ? "../../Conveyor-test-task/img/icons/sprite.svg#icon-checkbox-2"
        : "../img/icons/sprite.svg#icon-checkbox-2";
      checkboxIcon.setAttribute("href", iconPath);
    } else {
      // Return the original icon
      const iconPath = isLocalhost
        ? "../../Conveyor-test-task/img/icons/sprite.svg#icon-checkbox"
        : "../img/icons/sprite.svg#icon-checkbox";
      checkboxIcon.setAttribute("href", iconPath);
    }
  });
});
