const fs = require('fs');
const readInput = fs.readFileSync('./day5data.txt', 'utf8')

// Constants
const totalRow = 128;
const totalCol = 8;

// Data preparation 
const splitArray = (data) => {
  const arr = data.split("\n");
  const result = arr.map(item => {
    let tempArr = []
    let arr1 = item.slice(0,7);
    let arr2 = item.slice(7);
    tempArr.push(arr1);
    tempArr.push(arr2);
    return tempArr;
  })
  return result;
}

// Finding the row number
const rowFinder = (string) => {
  // Setting up the array which contains element from 0..128
  let tempRow = [];
  for (let row = 0; row < totalRow; row++) {
    tempRow.push(row);
  }

  // Splits the array in half, preserve the half that is needed.
  // Process is repeated until array contains only 1 element.
  // This process is similar to binary search
  for(let i = 0; i < string.length;i++) {
    if(string[i].toLowerCase() === 'f') {
      tempRow = tempRow.slice(0, Math.floor(tempRow.length/2));
    } else if (string[i].toLowerCase() === 'b') {
      tempRow = tempRow.slice(Math.floor(tempRow.length/2), tempRow.length);
    }
  }
  return tempRow;
}

// Finding the column number
const colFinder = (string) => {
  // Setting up array ranging from 0..8
  let tempCol = [];
  for (let col = 0; col < totalCol; col++) {
    tempCol.push(col);
  }

  // Same as row finder 
  for(let i = 0; i < string.length;i++) {
    if(string[i].toLowerCase() === 'l') {
      tempCol = tempCol.slice(0, Math.floor(tempCol.length/2));
    } else if (string[i].toLowerCase() === 'r') {
      tempCol = tempCol.slice(Math.floor(tempCol.length/2), tempCol.length);
    }
  }
  return tempCol;
}

// Part A
const partA = (arr) => {
  let ansArr = [];
  arr.forEach(item => {
    let row = rowFinder(item[0]);
    let col = colFinder(item[1]);
    // Math operation as per challenge
    ansArr.push((parseInt(row) * 8) + parseInt(col));
  })
  return ansArr;
}

const partB = (arr) => {
  // Min number +1 and max number -1 as they are not valid seats
  for(let i = Math.min(...arr) + 1; i < Math.max(...arr) - 1; i++) {
    if(!arr.includes(i)) {
      return i;
    }
  }
}

const resultArr = splitArray(readInput);
const answerPartA = Math.max(...(partA(resultArr)));
const answerPartB = partB(partA(resultArr));

console.log("Answer for part A is: " + answerPartA);
console.log("Answer for part B is: " + answerPartB);

