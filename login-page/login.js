document.getElementById('admin-login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('user-login').style.display = 'none';
    document.getElementById('admin-login').style.display = 'block';
});

document.getElementById('user-login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';
});

function login() {
    if (document.getElementById('admin-login').style.display === 'block') {
        const username1 = document.getElementById('admin-username').value.trim();
        const password1 = document.getElementById('admin-password').value.trim();
        
        if (username1 === "admin" && password1 === "admin1234") {
            window.location.href = "../admin-page/admins.html";
        } else {
            alert("Invalid credentials");
        }

        document.getElementById('admin-username').value = '';
        document.getElementById('admin-password').value = '';
    } else {
        const username2 = document.getElementById('username').value.trim();
        const password2 = document.getElementById('password').value.trim();
        
        if (username2 === "user" && password2 === "user1234") {
            window.location.href = "../main-page/main.html";
        } else {
            alert("Invalid credentials");
        }

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
// Add these event listeners
document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('user-login').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('back-to-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';
});

// Add this new function
function signup() {
    const name = document.getElementById('signup-name').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();

    if (!name || !username || !password || !phone) {
        alert("All fields are required!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Add your signup logic here (e.g., send data to backend)
    alert(`Signup successful! Welcome, ${name}. Please login.`);
    
    // Navigate back to login page
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';

    // Clear fields
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('signup-phone').value = '';
}