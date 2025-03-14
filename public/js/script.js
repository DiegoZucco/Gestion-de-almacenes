document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('button-login');
    const signupButton = document.getElementById('button-signup');
    const homeButton = document.getElementById('button-home');
    const logoutButton = document.getElementById('button-logout');


    loginButton.addEventListener('click', function() {
        location.href = 'login.html';
    });

    signupButton.addEventListener('click', function() {
        location.href = 'signup.html';
    });

    homeButton.addEventListener('click', function() {
        location.href = 'pagina-principal.html';
    });

});
