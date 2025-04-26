const form = document.getElementById('receipt-form');
const formContainer = document.getElementById('form-container');
const receiptContainer = document.getElementById('receipt-container');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const transactionId = document.getElementById('transaction-id').value;
    const amount = parseFloat(document.getElementById('amount').value).toFixed(2);
    const charge = parseFloat(document.getElementById('charge').value).toFixed(2);
    const total = (parseFloat(amount) + parseFloat(charge)).toFixed(2);
    const time = new Date(document.getElementById('time').value).toLocaleString();

    document.getElementById('display-phone-number').innerText = phoneNumber;
    document.getElementById('display-transaction-id').innerText = transactionId;
    document.getElementById('display-amount').innerText = `${amount} Tk.`;
    document.getElementById('display-charge').innerText = `${charge} Tk.`;
    document.getElementById('display-total').innerText = `${total} Tk.`;
    document.getElementById('display-time').innerText = time;

    formContainer.style.display = 'none';
    receiptContainer.style.display = 'block';
});

function call() {
    alert("Calling...");
}

function message() {
    alert("Messaging...");
}

function edit() {
    formContainer.style.display = 'block';
    receiptContainer.style.display = 'none';
}
