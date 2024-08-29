function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
    let total = 0;

    checkboxes.forEach((checkbox) => {
        total += parseInt(checkbox.value);
    });

    document.getElementById('totalPrice').innerText = total.toLocaleString();
}
