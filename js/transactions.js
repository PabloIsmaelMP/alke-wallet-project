document.addEventListener('DOMContentLoaded', function() {
    const transactionsTableBody = document.getElementById('transactions-table-body');
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    if (transactions.length === 0) {
        transactionsTableBody.innerHTML = '<tr><td colspan="3" class="text-center">No hay transacciones registradas.</td></tr>';
    } else {
        // Clear example rows
        transactionsTableBody.innerHTML = '';
        // Populate table with transactions from localStorage
        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            const amountClass = transaction.type === 'deposit' ? 'text-success' : 'text-danger';

            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td class="${amountClass}">${formatCurrency(transaction.amount)}</td>
            `;
            transactionsTableBody.appendChild(row);
        });
    }

    // Function to format currency
    function formatCurrency(amount) {
        // Remove '+' or '-' sign for formatting
        const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g,""));
        const formattedAmount = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(numericAmount);

        if (amount.startsWith('+')) {
            return `+${formattedAmount}`;
        } else if (amount.startsWith('-')) {
            return `-${formattedAmount.replace('-', '')}`;
        } else {
            return formattedAmount;
        }
    }
});