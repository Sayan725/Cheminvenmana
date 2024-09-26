 // JSON array to store chemical data
    const initialData = [
      { id: 1, chemicalName: 'Ammonium Persulfate', vendor: 'LG Chem', density: 3525.92, viscosity: 60.63, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 6495.18 },
      { id: 2, chemicalName: 'Caustic Potash', vendor: 'Formosa', density: 3172.15, viscosity: 48.22, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 8751.90 },
      { id: 3, chemicalName: 'Dimethylaminopropylamino', vendor: 'LG Chem', density: 8435.37, viscosity: 12.62, packaging: 'Barrel', packSize: 75, unit: 'L', quantity: 5964.61 },
      { id: 4, chemicalName: 'Mono Ammonium Phosphate', vendor: 'Sinopec', density: 1597.65, viscosity: 76.51, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 8183.73 },
      { id: 5, chemicalName: 'Ferric Nitrate', vendor: 'DowDuPont', density: 364.04, viscosity: 14.90, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 4154.33 },
      { id: 6, chemicalName: 'n-Pentane', vendor: 'Sinopec', density: 4535.26, viscosity: 66.76, packaging: 'N/A', packSize: null, unit: 't', quantity: 6272.34 },
      { id: 7, chemicalName: 'Glycol Ether PM', vendor: 'LG Chem', density: 6495.18, viscosity: 72.12, packaging: 'Bag', packSize: 250, unit: 'kg', quantity: 8749.54 },
      { id: 8, chemicalName: 'Sodium Bicarbonate', vendor: 'Baker', density: 1440.00, viscosity: 8.00, packaging: 'Bag', packSize: 50, unit: 'kg', quantity: 10500.00 },
      { id: 9, chemicalName: 'Calcium Chloride', vendor: 'BASF', density: 1800.00, viscosity: 12.00, packaging: 'Bag', packSize: 25, unit: 'kg', quantity: 7500.00 },
      { id: 10, chemicalName: 'Sodium Hydroxide', vendor: 'Dow', density: 1390.00, viscosity: 18.00, packaging: 'Drum', packSize: 200, unit: 'kg', quantity: 3200.00 },
      { id: 11, chemicalName: 'Hydrochloric Acid', vendor: 'Solvay', density: 1180.00, viscosity: 1.00, packaging: 'Barrel', packSize: 200, unit: 'L', quantity: 5400.00 },
      { id: 12, chemicalName: 'Potassium Nitrate', vendor: 'Fertilizer Co', density: 1000.00, viscosity: 15.00, packaging: 'Bag', packSize: 40, unit: 'kg', quantity: 9000.00 },
      { id: 13, chemicalName: 'Urea', vendor: 'Yara', density: 1300.00, viscosity: 20.00, packaging: 'Bag', packSize: 50, unit: 'kg', quantity: 8000.00 },
      { id: 14, chemicalName: 'Ammonium Sulfate', vendor: 'Nutrien', density: 1180.00, viscosity: 9.00, packaging: 'Bag', packSize: 25, unit: 'kg', quantity: 6200.00 },
      { id: 15, chemicalName: 'Magnesium Sulfate', vendor: 'K+S', density: 1840.00, viscosity: 10.00, packaging: 'Bag', packSize: 50, unit: 'kg', quantity: 5300.00 },

    ];

    let chemicalData = [
      { id: 1, chemicalName: 'Ammonium Persulfate', vendor: 'LG Chem', density: 3525.92, viscosity: 60.63, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 6495.18 },
      { id: 2, chemicalName: 'Caustic Potash', vendor: 'Formosa', density: 3172.15, viscosity: 48.22, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 8751.90 },
      { id: 3, chemicalName: 'Dimethylaminopropylamino', vendor: 'LG Chem', density: 8435.37, viscosity: 12.62, packaging: 'Barrel', packSize: 75, unit: 'L', quantity: 5964.61 },
      { id: 4, chemicalName: 'Mono Ammonium Phosphate', vendor: 'Sinopec', density: 1597.65, viscosity: 76.51, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 8183.73 },
      { id: 5, chemicalName: 'Ferric Nitrate', vendor: 'DowDuPont', density: 364.04, viscosity: 14.90, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 4154.33 },
      { id: 6, chemicalName: 'n-Pentane', vendor: 'Sinopec', density: 4535.26, viscosity: 66.76, packaging: 'N/A', packSize: null, unit: 't', quantity: 6272.34 },
      { id: 7, chemicalName: 'Glycol Ether PM', vendor: 'LG Chem', density: 6495.18, viscosity: 72.12, packaging: 'Bag', packSize: 250, unit: 'kg', quantity: 8749.54 },
      { id: 8, chemicalName: 'Sodium Bicarbonate', vendor: 'Baker', density: 1440.00, viscosity: 8.00, packaging: 'Bag', packSize: 50, unit: 'kg', quantity: 10500.00 },
      { id: 9, chemicalName: 'Calcium Chloride', vendor: 'BASF', density: 1800.00, viscosity: 12.00, packaging: 'Bag', packSize: 25, unit: 'kg', quantity: 7500.00 },
      { id: 10, chemicalName: 'Sodium Hydroxide', vendor: 'Dow', density: 1390.00, viscosity: 18.00, packaging: 'Drum', packSize: 200, unit: 'kg', quantity: 3200.00 },
      { id: 11, chemicalName: 'Hydrochloric Acid', vendor: 'Solvay', density: 1180.00, viscosity: 1.00, packaging: 'Barrel', packSize: 200, unit: 'L', quantity: 5400.00 },
      { id: 12, chemicalName: 'Potassium Nitrate', vendor: 'Fertilizer Co', density: 1000.00, viscosity: 15.00, packaging: 'Bag', packSize: 40, unit: 'kg', quantity: 9000.00 },
      { id: 13, chemicalName: 'Urea', vendor: 'Yara', density: 1300.00, viscosity: 20.00, packaging: 'Bag', packSize: 50, unit: 'kg', quantity: 8000.00 },
      { id: 14, chemicalName: 'Ammonium Sulfate', vendor: 'Nutrien', density: 1180.00, viscosity: 9.00, packaging: 'Bag', packSize: 25, unit: 'kg', quantity: 6200.00 },
      { id: 15, chemicalName: 'Magnesium Sulfate', vendor: 'K+S', density: 1840.00, viscosity: 10.00, packaging: 'Bag', packSize: 50, unit: 'kg', quantity: 5300.00 },
]; // Copy of the initial data
    let sortDirection = {}; // Track sort direction for each column

    // Function to display data in the table
    function displayTable(data) {
      const tableBody = document.querySelector('#chemical-table tbody');
      tableBody.innerHTML = ''; // Clear the table

      data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-id', index);
        tr.innerHTML = `
          <td>${row.id}</td>
          <td>${row.chemicalName}</td>
          <td>${row.vendor}</td>
          <td>${row.density}</td>
          <td>${row.viscosity}</td>
          <td>${row.packaging}</td>
          <td>${row.packSize ? row.packSize : 'N/A'}</td>
          <td>${row.unit}</td>
          <td>${row.quantity}</td>
        `;
        tableBody.appendChild(tr);
      });
    }

    // Display initial table
    displayTable(chemicalData);

    // Track selected row
    let selectedRowIndex = null;
    document.querySelector('#chemical-table tbody').addEventListener('click', function(e) {
      const row = e.target.parentElement;
      selectedRowIndex = row.getAttribute('data-id');
      document.querySelectorAll('#chemical-table tbody tr').forEach(tr => tr.classList.remove('selected'));
      row.classList.add('selected');
    });

    // Add sorting functionality to column headers
    document.querySelectorAll('th').forEach(header => {
      header.addEventListener('click', function() {
        const column = header.getAttribute('data-column');
        sortDirection[column] = !sortDirection[column]; // Toggle sorting direction
        
        // Perform sorting based on the column and direction
        chemicalData.sort((a, b) => {
          const valueA = a[column];
          const valueB = b[column];

          if (valueA < valueB) return sortDirection[column] ? -1 : 1;
          if (valueA > valueB) return sortDirection[column] ? 1 : -1;
          return 0;
        });

        displayTable(chemicalData); // Re-render the table with sorted data
      });
    });
    // Add button
    const modal = document.getElementById('addModal');
    const addButton = document.getElementById('add-row');
    const closeModal = document.getElementsByClassName('close')[0];
    const submitButton = document.getElementById('submit-new-row');

    // Open the modal when Add button is clicked
    addButton.onclick = () => {
      modal.style.display = 'block';
    };

    // Close the modal when X button is clicked
    closeModal.onclick = () => {
      modal.style.display = 'none';
    };

    // Close modal when user clicks outside the modal content
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };

    // Add new chemical row when Submit is clicked
    submitButton.onclick = () => {
      const chemicalName = document.getElementById('chemicalName').value;
      const vendor = document.getElementById('vendor').value;
      const density = parseFloat(document.getElementById('density').value);
      const viscosity = parseFloat(document.getElementById('viscosity').value);
      const packaging = document.getElementById('packaging').value;
      const packSize = parseInt(document.getElementById('packSize').value);
      const unit = document.getElementById('unit').value;
      const quantity = parseFloat(document.getElementById('quantity').value);

      // Create a new chemical object and push it to chemicalData array
      const newChemical = {
        id: chemicalData.length + 1,
        chemicalName,
        vendor,
        density,
        viscosity,
        packaging,
        packSize,
        unit,
        quantity,
      };

      chemicalData.push(newChemical);

      // Refresh the table with the new data
      displayTable(chemicalData);

      // Close the modal and reset input fields
      modal.style.display = 'none';
      document.querySelectorAll('.form-input input').forEach(input => input.value = '');
    };
    // Move row up
    document.getElementById('move-up').addEventListener('click', function() {
      if (selectedRowIndex > 0) {
        [chemicalData[selectedRowIndex], chemicalData[selectedRowIndex - 1]] = [chemicalData[selectedRowIndex - 1], chemicalData[selectedRowIndex]];
        displayTable(chemicalData);
      }
    });

    // Move row down
    document.getElementById('move-down').addEventListener('click', function() {
      if (selectedRowIndex < chemicalData.length - 1) {
        [chemicalData[selectedRowIndex], chemicalData[selectedRowIndex + 1]] = [chemicalData[selectedRowIndex + 1], chemicalData[selectedRowIndex]];
        displayTable(chemicalData);
      }
    });

    // Delete selected row
    document.getElementById('delete-row').addEventListener('click', function() {
      if (selectedRowIndex !== null) {
        chemicalData.splice(selectedRowIndex, 1); // Remove the selected row
        displayTable(chemicalData); // Refresh the table
        selectedRowIndex = null;
      }
    });

    // Refresh table (restore to original data)
    document.getElementById('refresh').addEventListener('click', function() {
      chemicalData = [...initialData]; // Restore the original data
      displayTable(chemicalData); // Refresh the table
    });

    // Save functionality (log to console for now)
    document.getElementById('save').addEventListener('click', function() {
      console.log('Saved data:', JSON.stringify(chemicalData, null, 2)); // Log data to the console
      alert('Data saved (check console for now)');
    });
  


