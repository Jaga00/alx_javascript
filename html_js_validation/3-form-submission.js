function handleFormSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Retrieve form field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Reset error message
    var errorMessage = document.getElementById('error');
    errorMessage.textContent = "";

    // Validate form fields
    if (name === "" || email === "") {
        errorMessage.textContent = "Please fill in all required fields.";
    } else {
        // Form submission successful
        var successMessage = document.createElement('p');
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.color = "green";
        document.body.appendChild(successMessage);
    }
}

document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);