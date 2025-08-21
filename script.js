function calculateTotal() {
     let prices = {
    "Fruits": 150.99,
    "Vegetables": 168.50,
    "Meat": 580.75,
    "Toiletries": 220.30,
    "Snacks": 200,
    "Dairy": 150
  };

  let surname = document.getElementById("surname").value;
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;
  let product = document.getElementById("product").value;
  let price = prices[product];
  let quantity = parseInt(document.getElementById("quantity").value);


  let messageDiv =document.getElementById("message");
  let resultDiv = document.getElementById("result");
   
  messageDiv.textContent = "";
  resultDiv.textContent = "";

  function validate() {

  if (!name || !surname || !contact || isNaN(quantity)) {
    alert("Please fill in all fields.");
    return;
  }
  if (isNaN(contact) || contact.length !== 10) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }
  if (quantity <= 0) {
    alert("quantity must be greater than 0.")
    return;
  }
  }
  let total = price * quantity;
  let discount = 0;

  // Apply discount rules
  if (quantity === 1) {
    discount = 0.05 * total; // 5% discount
  } else if (quantity >= 1) {
    discount = 0.10 * total; // 10% discount
  }

  let finalTotal = total - discount;

  document.getElementById("result").innerHTML =`

   Customer: ${surname} ${name} <br> 
     Contact: ${contact} <br> 
     product: ${product} <br>
     Product Price: R ${price.toFixed(2)} <br>
     Quantity: ${quantity} <br>
     Subtotal: R ${total.toFixed(2)} <br>
     Discount: R ${discount.toFixed(2)} <br>
     <b>Final Total: R ${finalTotal.toFixed(2)}</b>`;  
}
function clearForm() {
 
  document.querySelector("form").reset();

  document.getElementById("result").innerHTML = "";
  document.getElementById("message").innerHTML = "";
}
function exitApp() {
  let confirmExit = confirm("are you sure you want to exit");
  if (confirmExit) {
    window.location.href = "home.html";
    alert("thank you for using Mohammrd Tuck Shop!");
  }
}