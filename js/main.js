document.addEventListener('DOMContentLoaded', function() {
    // Initialize balance if it doesn't exist
    if (localStorage.getItem('balance') === null) {
        localStorage.setItem('balance', '1000.00');
    }

    // Function to format currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(amount);
    }

    // Display balance on menu page
    const balanceElement = document.getElementById('balance');
    if (balanceElement) {
        const balance = parseFloat(localStorage.getItem('balance'));
        balanceElement.textContent = formatCurrency(balance);
    }

    // Display username on menu page
    const usernameElement = document.querySelector('h2');
    if (usernameElement && usernameElement.textContent.includes('[Nombre Usuario]')) {
         // For now, use a hardcoded name. In a real app, this would come from the login.
        usernameElement.textContent = 'Bienvenido, Pablo Maturana';
    }
});