function processCheckedRows() {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const processedRows = new Set();

    checkedCheckboxes.forEach(checkbox => {
        const row = checkbox.closest('tr'); // Find the closest row
        if (!row) return;

        if (!processedRows.has(row)) {
            processedRows.add(row); // Ensure each row is processed only once

            // Check all unchecked checkboxes in the row
            row.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach(cb => cb.checked = true);

            // Input '1' into any textboxes in the row
            row.querySelectorAll('input[type="text"]').forEach(textbox => textbox.value = "1");
        }
    });
}

// Run the function to process the rows
processCheckedRows();

function checkAndSaveMark() {
    document.querySelectorAll("tr").forEach(row => {
        if (row.innerText.includes("Mark")) {
            let checkbox = row.querySelector("input[type='checkbox']");
            if (checkbox) {
                checkbox.checked = true;

                // Get table number and checkbox ID
                let table = checkbox.getAttribute("data-table");
                let id = checkbox.getAttribute("data-id");

                // Save the checkbox state
                if (!savedCheckboxes[table]) {
                    savedCheckboxes[table] = {};
                }
                savedCheckboxes[table][id] = true;
            }
        }
    });

    alert("Checkboxes for 'Mark' have been checked and saved!");
}
checkAndSaveMark();


















<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clickable Rows</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        .row-item {
            padding: 15px;
            background-color: #f8f9fa;
            border: 1px solid #ddd;
            cursor: pointer;
            text-align: center;
        }
        .row-item:hover {
            background-color: #e9ecef;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 row-item" onclick="showTable(1)">Row 1</div>
            <div class="col-12 row-item" onclick="showTable(2)">Row 2</div>
            <div class="col-12 row-item" onclick="showTable(3)">Row 3</div>
        </div>

        <div id="table-container-1" class="mt-4" style="display: none;">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="table-container-2" class="mt-4" style="display: none;">
          <table class="table table-striped">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>nicky</td>
                      <td>ravee</td>
                      <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>meg</td>
                      <td>gary</td>
                      <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Mark</td>
                      <td>ruby</td>
                      <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                  </tr>
              </tbody>
          </table>
      </div>

        <div id="table-container-3" class="mt-4" style="display: none;">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>bibi</td>
                        <td>schatzie</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>liebling</td>
                        <td>Mark</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>chouchou</td>
                        <td>cherie</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        function showTable(tableNumber) {
            document.getElementById('table-container-1').style.display = 'none';
            document.getElementById('table-container-2').style.display = 'none';
            document.getElementById('table-container-3').style.display = 'none';
            document.getElementById('table-container-' + tableNumber).style.display = 'block';
        }
    </script>
    <script>
      function showTable(tableNumber) {
          // Hide all tables
          document.getElementById('table-container-1').style.display = 'none';
          document.getElementById('table-container-2').style.display = 'none';
          document.getElementById('table-container-3').style.display = 'none';
  
          // Uncheck all checkboxes
          document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
              checkbox.checked = false;
          });
  
          // Show the selected table
          document.getElementById('table-container-' + tableNumber).style.display = 'block';
      }
  </script>
</body>
</html>