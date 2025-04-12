function searchProducts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = productName.includes(input) ? 'block' : 'none';
    });
}

// Category filter
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = card.dataset.category === category ? 'block' : 'none';
        });
    });
});

<<<<<<< Updated upstream
    let cart = [];

    function addToCart(productName) {

        cart.push(productName);

        alert(`${productName} added to cart!`);

=======
// Initialize cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName) {
    cart.push(productName);
    alert(`${productName} added to cart!`);
    updateCartIcon();
}

// Function to update the cart icon count
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
>>>>>>> Stashed changes
    }

<<<<<<< Updated upstream
    function showCart() {

        alert(`Cart Items:\n${cart.join('\n')}`);

    }
=======
// Function to show cart contents
function showCart() {
    alert(`Cart Items:\n${cart.join('\n')}`);
}

// Function to redirect to the cart page
function redirectToCart() {
    window.location.href = '../cart-page/cart.html';
}
>>>>>>> Stashed changes
