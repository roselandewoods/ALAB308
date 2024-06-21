///Part 2///


///Data as a string///

// Data needs to be split into rows
const csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';// Split the CSV data into rows
const rows = csvData.split('\n');

// Number of columns needs to be intentified
const numberOfColumns = rows[0].split(',').length;


// An array needs to be created 
let dataArray = [];

// forEach needs to be implemented 

rows.forEach(row => {
    const columns = row.split(',');
    dataArray.push(columns);
  });

console.log(`Number of columns: ${numberOfColumns}`);
