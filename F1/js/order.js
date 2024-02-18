    // Get the table element
    var table = document.getElementById("standings");

    // Get the rows of the table except the first one (header)
    var rows = Array.from(table.getElementsByTagName("tr")).slice(1);

    // Sort the rows based on the points (descending order)
    rows.sort(function(a, b) {
        var pointsA = parseInt(a.getElementsByTagName("td")[2].innerText);
        var pointsB = parseInt(b.getElementsByTagName("td")[2].innerText);
        return pointsB - pointsA;
    });

    // Re-append the sorted rows to the table
    rows.forEach(function(row) {
        table.appendChild(row);
    });

    // Update the positions after sorting
    var position = 1;
    rows.forEach(function(row) {
        row.getElementsByTagName("td")[0].innerText = position++;
    });