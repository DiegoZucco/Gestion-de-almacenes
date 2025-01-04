document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('button-login');
    const signupButton = document.getElementById('button-signup');

    loginButton.addEventListener('click', function() {
        location.href = 'login.html';
    });

    signupButton.addEventListener('click', function() {
        location.href = 'signup.html';
    });
});
