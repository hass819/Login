

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('user')) {
        displayNavbarAndWelcome();
    }
});

function toggleForms() {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var errorMessage = document.getElementById('login-error');
    
    if (!email || !password) {
        errorMessage.textContent = 'Both email and password are required.';
        return;
    }
    
    if (email === 'user@example.com' && password === 'password123') {
        localStorage.setItem('user', JSON.stringify({ email }));
        displayNavbarAndWelcome();
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
}

function signup() {
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    
    if (!username || !email || !password) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }
    
    localStorage.setItem('user', JSON.stringify({ username, email }));
    displayNavbarAndWelcome();
}

function displayNavbarAndWelcome() {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('welcome-message').style.display = 'block';
    
    var user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('user-name').textContent = user.username || 'User';
    
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
}

function logout() {
    localStorage.removeItem('user');
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('welcome-message').style.display = 'none';
    
    document.getElementById('login-form').style.display = 'block';
}
