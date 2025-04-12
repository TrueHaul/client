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

    let cart = [];

    function addToCart(productName) {

        cart.push(productName);

        alert(`${productName} added to cart!`);

    }

    function showCart() {

        alert(`Cart Items:\n${cart.join('\n')}`);

    }