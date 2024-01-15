   document.getElementById('myForm').addEventListener('submit', function(e) {
       e.preventDefault();

       var field1 = document.getElementById('field1').value;
       var category = document.getElementById('category').value;

       google.script.run.doPost(field1, category);
   });

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var data = {
        field1: document.getElementById('field1').value,
        category: document.getElementById('category').value,
        // Add other form elements here
    };

    // Example for checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        data[checkbox.name] = checkbox.value;
    });

    fetch('https://script.google.com/macros/s/AKfycbzOM0Kiv2Bs_sP-ic5_NptonAWC5RFo4S-2shkI-lYS25xaDn283T6tpLAnl0fo-M9G/exec', {
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


    var today = new Date();
    var formattedDate = today.toLocaleDateString('en-US', {
    day: 'long',
    month: 'long',
    year: 'numeric'
});
 
