function validateEmail() {
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error');
    errorElement.textContent = "";

    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }

    return true;
}