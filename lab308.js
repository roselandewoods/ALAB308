//  Part 1

// Data needs to be split into rows
const csvData = 
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
const rows = csvData.split('\n');

// We need extract headers 
const headers = rows[0].split(',');

// We need an array to hold the *parsed data
const parsedData = [];

// We need to loop through each row
  const cells = rows[0].split(',');

  // We need to create an object to hold the row data
  const rowObject = {};

  // We need to populate the row object with data from the *cells
  for (let zzz = 0; zzz < cells.length; zzz++) {
    rowObject[headers[zzz]] = cells[zzz];
  }

  // We need to *push (add) the row object to the parsed data array
  parsedData.push(rowObject);

