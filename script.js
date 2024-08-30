function changeQuantity(id, price, delta) {
    var qtyInput = document.getElementById(id);
    var currentValue = parseInt(qtyInput.value);
    if (!isNaN(currentValue)) {
        qtyInput.value = Math.max(0, currentValue + delta); // Tidak boleh kurang dari 0
    } else {
        qtyInput.value = 0;
    }
    calculateTotal(); // Perbarui total setiap kali kuantitas berubah
}

function calculateTotal() {
    const inputs = document.querySelectorAll('input[type="number"]');
    let total = 0;
    let orders = [];
    const rek = "Pembayaran akan dilakukan dengan transfer ke rekening:\nBCA 7750878347\nA.N. Nedi Sopian";


    inputs.forEach(input => {
        const quantity = parseInt(input.value);
        const price = parseInt(input.getAttribute('data-price'));
        const name = input.getAttribute('data-name');

        if (quantity > 0) {
            total += quantity * price;
            orders.push(`${name} x${quantity} - Rp ${(quantity * price).toLocaleString()}`);
        }
    });

    document.getElementById('totalPrice').innerText = total.toLocaleString();

    // Update the order list
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach(order => {
        const li = document.createElement('li');
        li.innerText = order;
        orderList.appendChild(li);
    });

    // Update WhatsApp link
    const whatsappLink = document.getElementById('whatsappLink');
    const message = `Saya ingin memesan:\n${orders.join('\n')}\n\nTotal: Rp ${total.toLocaleString()}\n\n${rek}`;
    whatsappLink.href = `https://wa.me/628111269691?text=${encodeURIComponent(message)}`;
}
