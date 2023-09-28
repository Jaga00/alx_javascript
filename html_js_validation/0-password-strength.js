function validatePassword() {
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');
    errorElement.textContent = "";

    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasDigit = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long.";
    } else if (!hasUpperCase) {
        errorElement.textContent = "Password must contain at least one uppercase letter.";
    } else if (!hasLowerCase) {
        errorElement.textContent = "Password must contain at least one lowercase letter.";
    } else if (!hasDigit) {
        errorElement.textContent = "Password must contain at least one numeric digit.";
    } else if (!hasSpecialChar) {
        errorElement.textContent = "Password must contain at least one special character (!@#$%^&*).";
    } else {
        return true;
    }

    return false;
}