   document.getElementById('myForm').addEventListener('submit', function(e) {
       e.preventDefault();

       var field1 = document.getElementById('field1').value;
       var category = document.getElementById('category').value;

       google.script.run.myFunction(field1, category);
   });


    var today = new Date();
    var formattedDate = today.toLocaleDateString('en-US', {
    day: 'long',
    month: 'long',
    year: 'numeric'
});
 
