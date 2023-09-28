function generateInputFields(numFields) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ""; // Clear previous content

    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputContainer.appendChild(inputField);
    }
}

function validateForm() {
    var inputFields = document.querySelectorAll('#inputContainer input');
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            alert("Please fill in all fields");
            return false;
        }
    }
    return true;
}

document.getElementById('numFields').addEventListener('change', function() {
    generateInputFields(this.value);
});

document.getElementById('dynamicForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});