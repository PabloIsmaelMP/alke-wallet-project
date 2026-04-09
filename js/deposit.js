document.addEventListener('DOMContentLoaded', function() {
    const depositForm = document.getElementById('deposit-form');

    if (depositForm) {
        depositForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const amountInput = document.getElementById('amount');
            const amount = parseFloat(amountInput.value);

            if (isNaN(amount) || amount <= 0) {
                alert('Por favor, ingrese un monto válido.');
                return;
            }

            let currentBalance = parseFloat(localStorage.getItem('balance'));
            currentBalance += amount;
            localStorage.setItem('balance', currentBalance.toFixed(2));

            // Store transaction
            let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            transactions.push({
                date: new Date().toLocaleDateString('es-CL'),
                description: 'Depósito',
                amount: `+${amount.toFixed(2)}`,
                type: 'deposit'
            });
            localStorage.setItem('transactions', JSON.stringify(transactions));


            alert('Depósito realizado con éxito.');
            window.location.href = 'menu.html';
        });
    }
});