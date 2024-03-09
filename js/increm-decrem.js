const increaseButton = document.querySelector(".btn-incr");
const decreaseButton = document.querySelector(".btn-decr");

// Get DOM element to display quantity and price
const amountElement = document.querySelector(".amount");
const priceElement = document.getElementById("price");

// Get the cost of one conveyor
const unitPrice = 22360;

// Set the initial number of conveyors
let quantity = 1;

// Function for updating the displayed quantity and price
function updateQuantityAndPrice() {
  // Update the displayed quantity
  amountElement.textContent = quantity;

  // Calculate the new price
  const totalPrice = unitPrice * quantity;

  // Update the displayed price
  priceElement.textContent = `$${totalPrice}`;
}

// Add event handler for the increase quantity button
increaseButton.addEventListener("click", () => {
  quantity++;
  updateQuantityAndPrice();
});
decreaseButton.addEventListener("click", () => {
  // Check that the number is not less than 1
  if (quantity > 1) {
    quantity--;
    updateQuantityAndPrice();
  }
});

// Initialise the display of the initial quantity and price
updateQuantityAndPrice();