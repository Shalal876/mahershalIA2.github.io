function calculateInvoice() {
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const tbody = document.getElementById('invoiceBody');
    let subtotal = 0;

    tbody.innerHTML = '';
    selectedProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.name}</td><td>$${product.price.toFixed(2)}</td><td>$${(product.price * product.qty).toFixed(2)}</td>`;
        tbody.appendChild(row);
        subtotal += product.price * product.qty;
    });

    const tax = subtotal * 0.05;
    const discount = subtotal * 0.10;
    const total = subtotal + tax - discount;

    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('discount').textContent = `$${-discount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('date').textContent = new Date().toLocaleDateString();
}

function cancelInvoice() {
    localStorage.removeItem('selectedProducts');
    window.location.href = 'index.html';
}

function exitPage() {
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

window.onload = calculateInvoice;
