function calculateBill() {
    const units = document.getElementById('units').value;
    const rate = 0.75;
    let billAmount = units * rate;
    if (units > 100) {
        billAmount += 10;
    } else if (units > 50) {
        billAmount += 5;
    }

    document.getElementById('bill-amount').innerText = `Rs ${billAmount.toFixed(2)}`;
}

document.getElementById('calculate-btn').addEventListener('click', calculateBill);
