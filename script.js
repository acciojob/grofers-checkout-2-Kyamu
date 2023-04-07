//your code here
// Get all the elements that store the prices
const pricesElements = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize the total price to 0
let totalPrice = 0;

// Loop through each prices element and add its value to the total price
for (let i = 0; i < pricesElements.length; i++) {
  totalPrice += parseFloat(pricesElements[i].textContent);
}

// Create the last row of the table to display the total price
const table = document.querySelector('table');
const row = table.insertRow();
const cell = row.insertCell();
cell.colSpan = 2;
cell.textContent = `Total: $${totalPrice.toFixed(2)}`;

// Set the data-ns-test attribute for the total cell
cell.setAttribute('data-ns-test', 'grandTotal');