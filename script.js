document.getElementById('receipt-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const phoneNumber = document.getElementById('phone-number').value;
    const transactionId = document.getElementById('transaction-id').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const charge = parseFloat(document.getElementById('charge').value);
    const timeInput = document.getElementById('time').value;
  
    const total = amount + charge;
  
    // FORMAT TIME
    const formattedTime = formatDateTime(timeInput);
  
    // Fill receipt
    document.getElementById('display-phone-number').textContent = phoneNumber;
    document.getElementById('display-transaction-id').textContent = transactionId;
    document.getElementById('display-amount').textContent = amount.toLocaleString() + " Tk.";
    document.getElementById('display-charge').textContent =charge.toLocaleString() + " Tk.";
    document.getElementById('display-total').textContent = total.toLocaleString() + " Tk.";
    document.getElementById('display-time').textContent = formattedTime;
  
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('receipt-container').style.display = 'block';
  });
  
  // Helper function to format the date
  function formatDateTime(datetimeValue) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const date = new Date(datetimeValue);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
  
    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  }
  