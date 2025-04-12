import { BACKEND_URL, LOGIN_ROUTE } from "../config/config.js";
import { METHODS } from "../config/constants.js";

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

window.login = async function login() {
    // if (document.getElementById('admin-login').style.display === 'block') {
    //     const username1 = document.getElementById('admin-username').value.trim();
    //     const password1 = document.getElementById('admin-password').value.trim();

    //     if (username1 === "admin" && password1 === "admin1234") {
    //         window.location.href = "../admin-page/admins.html";
    //     } else {
    //         alert("Invalid credentials");
    //     }

    //     document.getElementById('admin-username').value = '';
    //     document.getElementById('admin-password').value = '';
    // } else {
    try {
        const requestBody = {
            username: document.getElementById('username').value.trim(),
            password: document.getElementById('password').value.trim()
        };

        const response = await fetch(`${BACKEND_URL}/${LOGIN_ROUTE}`, {
            method: METHODS.POST,
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
        });

        if(response.status.ok) {
            console.log(response);
        }
        else {

        }   
    }
    catch (error) {

    }



    if (username2 === "user" && password2 === "user1234") {
        window.location.href = "../main-page/main.html";
    } else {
        alert("Invalid credentials");
    }

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    // }
}