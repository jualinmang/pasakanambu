function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
    let total = 0;
    let orders = [];

    checkboxes.forEach((checkbox) => {
        const qtyInput = document.getElementById(`qty${checkbox.id.replace('menu', '')}`);
        const qty = parseInt(qtyInput.value);
        const itemPrice = parseInt(checkbox.value) * qty;
        total += itemPrice;
        orders.push(`${checkbox.getAttribute('data-name')} x${qty} - Rp ${itemPrice.toLocaleString()}`);
    });

    document.getElementById('totalPrice').innerText = total.toLocaleString();

    // Update the order list
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach((order) => {
        const li = document.createElement('li');
        li.innerText = order;
        orderList.appendChild(li);
    });

    // Update WhatsApp link
    const whatsappLink = document.getElementById('whatsappLink');
    const message = `Saya ingin memesan:\n${orders.join('\n')}\n\nTotal: Rp ${total.toLocaleString()}`;
    whatsappLink.href = `https://wa.me/+628111269691?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('input[name="menu"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const qtyInput = document.getElementById(`qty${this.id.replace('menu', '')}`);
        qtyInput.disabled = !this.checked;
        calculateTotal();
    });
});
