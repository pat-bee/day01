<script> 
const sheetId = '1jZ5BgnbNX_rpgHugpXv7K5CO1_j-lWusbV6WhhPnAc8';
const apiKey = 'AIzaSyBRbknpZp8vitntt5OwwAI0OMIcEhgUK7o';
const range = 'daydatatest!A1:B10'; // Adjust based on your actual data range

function fetchSheetData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const items = data.values; // Array of sheet rows
      const itemsList = document.getElementById('itemsList');
      itemsList.innerHTML = ''; // Clear existing items
      items.forEach((item, index) => {
        // Assuming item[0] contains the item name and item[1] is the completion marker
        if (item[1] !== 'Completed') { // Check if not marked as completed
          const listItem = document.createElement('div');
          listItem.innerHTML = `<input type="checkbox" id="item-${index}" data-item-id="${item[0]}"> <label for="item-${index}">${item[0]}</label>`;
          itemsList.appendChild(listItem);
        }
      });
    });
}

</script>  
