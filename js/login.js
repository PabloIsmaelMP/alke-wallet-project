document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (email.trim() === '' || password.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Simulate login
            if (email === 'user@alke.com' && password === 'password') {
                // Store login state (optional, for more complex scenarios)
                sessionStorage.setItem('loggedIn', 'true');
                // Redirect to menu
                window.location.href = 'menu.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos.');
            }
        });
    }
});
