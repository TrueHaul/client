// Initialize cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    alert(`${productName} added to cart!`);
    updateCartIcon();
}

// Function to update the cart icon count
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Function to display items in the cart (for the Cart page)
function showCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    
    // Clear previous items
    cartItemsContainer.innerHTML = '';
    
    let total = 0;

    // Populate the list with items in the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    // Update total price
    cartTotalContainer.textContent = `Total: ₹${total}`;
}

// Example usage:
// addToCart('Fresh Organic Milk', 80);
// showCart();
