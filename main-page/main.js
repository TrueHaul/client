function searchProducts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
card.style.display = 'block';
        } else {
card.style.display = 'none';
        }
    });
}

    document.querySelectorAll('.category-btn').forEach(btn => {

        btn.addEventListener('click', () => {

            const category = btn.dataset.category;

            document.querySelectorAll('.product-card').forEach(card => {

card.style.display = card.dataset.category === category ? 'block' : 'none';

            });

        });

    });

   // Initialize cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName) {
    cart.push(productName);
    
    // Update the cart icon count dynamically
    updateCartIcon();
}

// Function to update the cart icon count
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length; // Update count based on cart length
    }
}

// Function to redirect to the cart page
function redirectToCart() {
    window.location.href = '../cart-page/cart.html';
}

