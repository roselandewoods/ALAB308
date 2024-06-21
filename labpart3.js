//Part 3


// Data needs to be split into rows
const csvData =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
const rows = csvData.split('\n');


// Number of columns needs to be intentified
const numberOfColumns = rows[0].split(',').length;



// An array needs to be created 
let array = [];

rows.forEach((row) => {
  const columns = row.split(',');
  array = [...array, columns];
});

console.log(`Number of columns ${numberOfColumns}`);

console.log(array);




// The array needs to be converted to an array of objects
const data = array[0].map((header) => header.toLowerCase());
let newArray = [];
array.slice(1, array.length).forEach((rows) => {
  let object = {};

  rows.forEach((value, index) => {
    object[data[index]] = value;
  });


  
  newArray = [...newArray, object];
});

console.log(newArray);
