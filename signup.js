function validateSignup(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        return false;
    }

    if (localStorage.getItem(username)) {
        message.textContent = "Username already exists.";
        return false;
    }

    localStorage.setItem(username, password); // Store the new user
    message.textContent = "Signup successful! Redirecting to login...";
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 1000); // Delay for 1 second to show success message
    return false;
}