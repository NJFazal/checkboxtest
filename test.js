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

//this one just gets checkmarks by id
document.querySelectorAll('tr').forEach(row => {
    let checkbox = row.querySelector('input[type="checkbox"]#test');
    if (checkbox) {
        checkbox.checked = true;
    }
});