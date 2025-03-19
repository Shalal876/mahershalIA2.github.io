let loginAttempts = 0;
const maxAttempts = 3;

function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedInUser", username); // Store the logged-in user
        window.location.href = "index.html"; // Redirect to products page
    } else {
        loginAttempts++;
        message.textContent = `Invalid credentials. Attempts left: ${maxAttempts - loginAttempts}`;
        if (loginAttempts >= maxAttempts) {
            window.location.href = "error.html";
        }
    }
    return false;
}
