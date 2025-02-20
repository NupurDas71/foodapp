document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            this.nextElementSibling && selectSiblings(this.nextElementSibling);
        });
    });


    function selectSiblings(el) {
        if (el) {
            el.classList.add('selected');
            selectSiblings(el.nextElementSibling);
        }
    }
});


// script.js


// Initialize the base price for each coffee type
const coffeePrices = {
    "Americano": 80,
    "Cappuccino": 90,
    "Espresso": 85
};

let currentCoffeePrice = coffeePrices["Americano"]; // Default to Americano price
let extraItemsPrice = 0; // To store the price of selected extra items
let quantity = 1; // Default quantity is 1

// Function to update total price
function selectCoffeeType(radio) {
    // Get the selected coffee type price
    const selectedCoffee = radio.value;
    currentCoffeePrice = coffeePrices[selectedCoffee];

    // Get the selected extra items price
    extraItemsPrice = 0; // Reset extra items price
    const extraItems = document.querySelectorAll('input[name="Extraitem"]:checked');
    extraItems.forEach(item => {
        extraItemsPrice += parseFloat(item.value);
    });

    // Get the selected quantity
    quantity = parseInt(document.getElementById('quantitycofee').textContent);

    // Calculate the total price
    const totalPrice = (currentCoffeePrice + extraItemsPrice) * quantity;
    
    // Display the total price
    const priceContainer = document.querySelector('.price-container h4:last-child');
    priceContainer.textContent = `₹${totalPrice.toFixed(2)}`;
}

// Update quantity when user clicks '+' or '-'
function updateQuantity(change) {
    const quantityElement = document.getElementById('quantitycofee');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += change;

    // Prevent quantity from going below 1
    if (currentQuantity < 1) return;

    quantityElement.textContent = currentQuantity;
    selectCoffeeType({ value: document.querySelector('input[name="coffee"]:checked').value });
}









document.getElementById('place-order-button').addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get all required fields
    const requiredFields = document.querySelectorAll('.required-field');
    let allFilled = true;
    
    // Check if all required fields are filled
    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            allFilled = false;
            // Optionally add an error class to indicate the missing fields
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    // Show message if not all required fields are filled
    const messageContainer = document.getElementById('message-container');
    if (allFilled) {
        messageContainer.textContent = "Thank you for your order!";
        messageContainer.classList.remove('hidden');
    } else {
        messageContainer.textContent = "Please fill out all required fields.";
        messageContainer.classList.remove('hidden');
    }
});


    document.getElementById('signin-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var loginDiv = document.getElementById('logindiv');
        if (loginDiv.classList.contains('hidden')) {
            loginDiv.classList.remove('hidden');
        } else {
            loginDiv.classList.add('hidden');
        }
    });





    function toggleDetails() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
    }
    
 
    function showAddToCart() {
        const addtocart = document.getElementById("addtocartdiv");
        const addToRemove = document.getElementById("addtoremove");
        const addToCartButton = document.getElementById("addToCartButton");
    
        // Clear any existing timeout to prevent overlaps
        clearTimeout(addtocart.timeoutId);
        clearTimeout(addToRemove.timeoutId);
    
        if (isInCart) {
            // When removing from cart
            addToRemove.style.display = "block"; // Show "Removed from Cart" message
            addtocart.style.display = "none"; // Hide "Added to Cart"
            addToCartButton.style.backgroundColor = "red"; // Change button color to red
            addToCartButton.innerText = "Add to Cart"; // Update button text
    
            // Hide "Removed from Cart" message after 1 second
            addToRemove.timeoutId = setTimeout(() => {
                addToRemove.style.display = "none";
            }, 1000);
        } else {
            // When adding to cart
            addtocart.style.display = "block"; // Show "Added to Cart" message
            addToRemove.style.display = "none"; // Hide "Removed from Cart"
            addToCartButton.style.backgroundColor = "green"; // Change button color to green
            addToCartButton.innerText = "Remove from Cart"; // Update button text
    
            // Hide "Added to Cart" message after 1 second
            addtocart.timeoutId = setTimeout(() => {
                addtocart.style.display = "none";
            }, 1000);
        }
    
        // Toggle cart state
        isInCart = !isInCart;
    }
    
    // Attach the function to the button using JavaScript
    document.getElementById("addToCartButton").addEventListener("click", showAddToCart);
    

    
    function showOrder() {
                document.getElementById('place').style.display = 'block';
            }
    
            function closeOverlay() {
                document.getElementById('place').style.display = 'none';
            }
         
    function closeOverlay() {
        document.getElementById('overlay').style.display = 'none'; // Hide overlay
        document.getElementById('place').style.display = 'none'; // Hide Place Order section
    }
    function closePlace() {
        document.getElementById('place').style.display = 'none'; // Hide overlay
        document.getElementById('place').style.display = 'none'; // Hide Place Order section
    }
    function showPlaced() {
        var addtocartdiv = document.getElementById("addtocartdiv");
        addtocartdiv.classList.add("show"); // Add the 'show' class to display the element
        setTimeout(() => {
            addtocartdiv.classList.remove("show"); // Remove the 'show' class after 2 seconds
        }, 2000);
    }


    //quantity
    document.addEventListener("DOMContentLoaded", function() {
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        const quantityDisplay = document.getElementById('quantity-display').querySelector('span');
    
        incrementButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = currentValue + 1;
        });
    
        decrementButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityDisplay.textContent);
            if (currentValue > 1) {
                quantityDisplay.textContent = currentValue - 1;
            }
        });
    });

 
    


  
    
  

    

    function toggleLogin() {
        var loginDiv = document.getElementById('logindiv');
        if (loginDiv.style.display == 'none' ) {
            loginDiv.style.display = 'block'; // Show the modal
        } else {
            loginDiv.style.display = 'none'; // Hide the modal if it's already visible
        }
    }
    
    // Update the quantity of the item

// Update the quantity of the item and ensure it's between 1 and 5
function updateQuantity(amount) {
    let quantityElement = document.getElementById('quantitycofee');
    let quantity = parseInt(quantityElement.innerText);

    // Adjust quantity with limits
    quantity += amount;
    if (quantity < 1) quantity = 1; // Set minimum limit to 1
    if (quantity > 5) quantity = 5; // Set maximum limit to 5

    quantityElement.innerText = quantity; // Update the displayed quantity
    updateTotalPrice(); // Update total price when quantity changes
}

// Update the total price based on the selected options
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantitycofee').innerText);
    const coffeeType = document.querySelector('input[name="coffee"]:checked').value;
    const extraItem = document.querySelector('input[name="Extraitem"]:checked')?.value || 0;

    // Base prices for different coffee types
    let basePrice = 80.00; // Default base price for "Americano"
    if (coffeeType === "Cappuccino") basePrice = 90.00;
    if (coffeeType === "Espresso") basePrice = 70.00;

    const extraPrice = parseFloat(extraItem);
    const totalPrice = (basePrice + extraPrice) * quantity;

    // Update the total price in the DOM
    document.getElementById('totalPrice').innerText = `₹${totalPrice.toFixed(2)}`;
}

// Event listeners for increment and decrement buttons
document.addEventListener('DOMContentLoaded', function() {
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    
    incrementButton.addEventListener('click', function() {
        updateQuantity(1); // Increment by 1
    });
    
    decrementButton.addEventListener('click', function() {
        updateQuantity(-1); // Decrement by 1
    });
});





//refresh
// Function to check the form validity
function checkFormValidity() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let state = document.getElementById("state-selector").value;
    let pickupTime = document.getElementById("pickup-time-selector").value;
    let address = document.getElementById("address").value.trim();
    let phoneNumber = document.getElementById("phnno").value.trim();
    let paymentMethod = document.querySelector('input[name="payment"]:checked');

    // If all fields are filled and valid, enable the "Place Order" button
    if (firstName && lastName && validateEmail(email) && state && pickupTime && address && validatePhone(phoneNumber) && paymentMethod) {
        document.getElementById("placeorderbtn").disabled = false; // Enable button
    } else {
        document.getElementById("placeorderbtn").disabled = true; // Disable button
    }
}

// Validate email function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Validate phone function (10 digits only)
function validatePhone(phoneNumber) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
}

// Add event listeners to form fields for real-time validation
document.getElementById("firstName").addEventListener("input", checkFormValidity);
document.getElementById("lastName").addEventListener("input", checkFormValidity);
document.getElementById("email").addEventListener("input", checkFormValidity);
document.getElementById("state-selector").addEventListener("change", checkFormValidity);
document.getElementById("pickup-time-selector").addEventListener("change", checkFormValidity);
document.getElementById("address").addEventListener("input", checkFormValidity);
document.getElementById("phnno").addEventListener("input", checkFormValidity);
document.querySelectorAll('input[name="payment"]').forEach((radio) => {
    radio.addEventListener("change", checkFormValidity);
});

// Handle form submission
document.getElementById("placeorderbtn").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent form from submitting if not valid

    let orderMessage = document.getElementById("orderMessage");

    if (!document.getElementById("placeorderbtn").disabled) {
        orderMessage.textContent = "Order placed successfully!";
        orderMessage.style.color = "green";
    } else {
        orderMessage.textContent = "Please fill in all required fields correctly.";
        orderMessage.style.color = "red";
    }
});



//add to cart

//payement
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    let isValid = true;

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Email Validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Phone Validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // Address Validation
    if (address === "") {
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("addressError").style.display = "none";
    }

    // If form is valid, show "Pay Now" button
    if (isValid) {
        document.getElementById("payNowBtn").style.display = "block";
        document.getElementById("placeOrderBtn").disabled = true; // Disable "Place Order" button
    }
});



//add to cart


function addToCart(name, price) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // Create a new item object
    let newItem = { name, price };

    // Add item to cart
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a confirmation message
    alert(`${name} added to cart! 🛒`);
}


//proceedtopay
function proceedToPay(price) {
  window.location.href = `check.html?totalPrice=${encodeURIComponent(price)}`;
}
