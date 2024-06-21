// Part 4


// Data needs to be split into rows
const csvData =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const rows = csvData.split('\n');



// Number of columns needs to be identified
const numberOfColumns = rows[0].split(',').length;


// An array needs to be created 
let array = [];

rows.forEach((row) => {
  const columns = row.split(',');
  array = [...array, columns];
});




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

// You now have to remove the last element 
newArray = newArray.filter(
  (value) => newArray.indexOf(value) !== newArray.length - 1
);



////////// Data provided below to the interpreter /////////


// We have to add an object to the array 

console.log(newArray);
newArray.splice(1, 0, {
id: '48',
name: 'Barry',
occupation: 'Runner',
age: '25',
});

console.log(newArray);
newArray.push({
id: '7',
name: 'Bilbo',
occupation: 'None',
 age: '111',
});

console.log(newArray);


// we need to calculate the average age 

let totalAge = 0;

for (let zzz = 0; zzz < newArray.length; zzz++) {
  totalAge += Number(newArray[zzz].age);
  console.log(newArray[zzz].age);
}

const averageAge = (totalAge / newArray.length).toFixed(0);

console.log(`Average age is: ${averageAge}`);
