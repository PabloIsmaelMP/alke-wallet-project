$(function() {
    // Dummy data for contacts
    var availableContacts = [
        "Juan Perez",
        "Maria Gonzalez",
        "Pedro Martinez",
        "Ana Rodriguez",
        "Luis Sanchez"
    ];

    $("#recipient").autocomplete({
        source: availableContacts
    });

    $('#sendmoney-form').on('submit', function(event) {
        event.preventDefault();

        const recipient = $('#recipient').val();
        const amount = parseFloat($('#amount').val());
        const message = $('#message').val();

        if (recipient.trim() === '' || isNaN(amount) || amount <= 0) {
            alert('Por favor, complete todos los campos correctamente.');
            return;
        }

        let currentBalance = parseFloat(localStorage.getItem('balance'));

        if (amount > currentBalance) {
            alert('Saldo insuficiente para realizar la transferencia.');
            return;
        }

        currentBalance -= amount;
        localStorage.setItem('balance', currentBalance.toFixed(2));

        // Store transaction
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push({
            date: new Date().toLocaleDateString('es-CL'),
            description: `Envío a ${recipient}`,
            amount: `-${amount.toFixed(2)}`,
            type: 'send'
        });
        localStorage.setItem('transactions', JSON.stringify(transactions));

        alert(`Transferencia de ${formatCurrency(amount)} a ${recipient} realizada con éxito.`);
        window.location.href = 'menu.html';
    });

    // Function to format currency (could be in a shared file)
    function formatCurrency(amount) {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(amount);
    }
});