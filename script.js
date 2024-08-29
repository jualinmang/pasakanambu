function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
    let total = 0;
    let orders = [];

    checkboxes.forEach((checkbox) => {
        total += parseInt(checkbox.value);
        orders.push(checkbox.getAttribute('data-name'));
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
    whatsappLink.href = `https://wa.me/628111269691?text=${encodeURIComponent(message)}`;
}
