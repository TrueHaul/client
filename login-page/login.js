import { BACKEND_URL, LOGIN_ROUTE } from "../config/config.js";
import { METHODS } from "../config/constants.js";

// Toggle between User and Admin Login
document.getElementById('admin-login-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('user-login').style.display = 'none';
    document.getElementById('admin-login').style.display = 'block';
});

document.getElementById('user-login-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';
});

<<<<<<< Updated upstream
function login() {
    if (document.getElementById('admin-login').style.display === 'block') {
        const username1 = document.getElementById('admin-username').value.trim();
        const password1 = document.getElementById('admin-password').value.trim();
        
        if (username1 === "admin" && password1 === "admin1234") {
            window.location.href = "../admin-page/admins.html";
        } else {
            alert("Invalid credentials");
=======
// Toggle to Signup form
document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('user-login').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

// Back to Login from Signup
document.getElementById('back-to-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';
});

window.login = async function login() {
    if (document.getElementById('admin-login').style.display === 'block') {
        const username = document.getElementById('admin-username').value.trim();
        const password = document.getElementById('admin-password').value.trim();

        if (username === "admin" && password === "admin1234") {
            window.location.href = "../admin-page/admins.html";
        } else {
            alert("Invalid admin credentials");
>>>>>>> Stashed changes
        }

        document.getElementById('admin-username').value = '';
        document.getElementById('admin-password').value = '';
    } else {
<<<<<<< Updated upstream
        const username2 = document.getElementById('username').value.trim();
        const password2 = document.getElementById('password').value.trim();
        
        if (username2 === "user" && password2 === "user1234") {
            window.location.href = "../main-page/main.html";
        } else {
            alert("Invalid credentials");
=======
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        try {
            const response = await fetch(`${BACKEND_URL}/${LOGIN_ROUTE}`, {
                method: METHODS.POST,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = "../main-page/main.html";
            } else {
                alert("Invalid user credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Error during login. Please try again.");
>>>>>>> Stashed changes
        }

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
<<<<<<< Updated upstream
}
=======
};

window.signup = function signup() {
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

    // Replace with API call if backend signup is implemented
    alert(`Signup successful! Welcome, ${name}. Please login.`);

    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';

    // Clear signup form
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('signup-phone').value = '';
};
>>>>>>> Stashed changes
