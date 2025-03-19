let selectedProducts = [];
let productInventory = [
    { name: "Kitchen Knife", price: 300, qty: 100, category: "Home" },
    { name: "Padlock Set", price: 500, qty: 150, category: "Home" },
    { name: "Hinge Set", price: 1500, qty: 300, category: "Home" },
    { name: "Light Switch", price: 500, qty: 220, category: "Home" },
    { name: "Tape Measure", price: 1000, qty: 250, category: "Home" },
    { name: "Level", price: 3000, qty: 150, category: "Home" },
    { name: "Hammer", price: 1500, qty: 200, category: "Work" },
    { name: "Screwdriver", price: 350, qty: 250, category: "Work" },
    { name: "Drill", price: 5000, qty: 80, category: "Work" },
    { name: "Wrench", price: 120, qty: 180, category: "Work" },
    { name: "Saw", price: 2500, qty: 120, category: "Work" },
    { name: "Pliers", price: 600, qty: 180, category: "Work" }
];

function updateSelection() {
    selectedProducts = [];
    document.querySelectorAll('#productGrid input[type="checkbox"]:checked').forEach(checkbox => {
        const name = checkbox.getAttribute('data-name');
        const price = parseFloat(checkbox.getAttribute('data-price'));
        selectedProducts.push({ name, price, qty: 1 });
    });
}

function generateInvoice() {
    updateSelection();
    if (selectedProducts.length > 0) {
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
        window.location.href = 'invoice.html';
    } else {
        alert("Please select at least one product.");
    }
}

function cancelSelection() {
    document.querySelectorAll('#productGrid input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    selectedProducts = [];
}

function exitPage() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

function updateAuthButtons() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const authButtons = document.getElementById('auth-buttons');
    const userStatus = document.getElementById('user-status');
    if (loggedInUser) {
        authButtons.innerHTML = `
            <span class="header-btn">Logged in as ${loggedInUser}</span>
            <a href="#" class="header-btn" onclick="exitPage(); return false;">Logout</a>
        `;
        userStatus.textContent = `Signed in as ${loggedInUser}`;
    } else {
        authButtons.innerHTML = `
            <a href="signup.html" class="header-btn">Sign Up</a>
            <a href="login.html" class="header-btn">Login</a>
        `;
        userStatus.textContent = '';
    }
}

document.querySelectorAll('#productGrid input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelection);
});

window.onload = updateAuthButtons;