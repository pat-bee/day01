document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting form data
    var data = {
        field1: document.getElementById('field1').value,
        category: document.getElementById('category').value,
        // Add other form elements here as needed
    };

    // Example for handling checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        data[checkbox.name] = checkbox.value;
    });

    // Fetch request to Google Apps Script Web App URL
    fetch('https://script.google.com/macros/s/AKfycbwA5deCUEEtWnBDH7CeGas_XPeAPLLdbhCeq3dX8HaQoRImYwcHaVCUWQm-4Dackkn6/exec', { // <-- Replace with your Web App URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.error('Error:', error));
});

// Add any other JavaScript needed for your page here



    var today = new Date();
    var formattedDate = today.toLocaleDateString('en-US', {
    day: 'long',
    month: 'long',
    year: 'numeric'
});
 
