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


