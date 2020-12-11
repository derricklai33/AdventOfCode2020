const fs = require('fs');
const readInput = fs.readFileSync('./day3data.txt', 'utf8');

// split data into 2D array
// Made the array long enough to complete teh whole toboggan trajectory
const data = readInput.split('\n');
const result = data.map((item) => {
  const tempString = item;
  for (let i = 0; i < Math.round(data.length); i++) {
    item += tempString;
  }
  return item;
});

// in rows, right by 3
// in column, down by 1
const yAxisLimit = result.length;
const tree = '#';


const day3 = (arr, slopeRight, slopeDown) => {
  let xAxis = 0;
  let treeCount = 0;
  for (yAxis = 1; yAxis < yAxisLimit; yAxis += slopeDown) {
    for (i = 0; i < slopeRight; i++) {
      xAxis++;
    }  
    if (arr[yAxis][xAxis] === tree) {
      treeCount++;
    }
  }
  return treeCount;
}

const day3Slope2 = (arr, slopeRight, slopeDown) => {
  let xAxis = 0;
  let treeCount = 0;
  for (yAxis = 2; yAxis < yAxisLimit; yAxis += slopeDown) {
    for (i = 0; i < slopeRight; i++) {
      xAxis++;
    }  
    if (arr[yAxis][xAxis] === tree) {
      treeCount++;
    }
  }
  return treeCount;
}

const slope1 = day3(result, 1, 1);
const slope2 = day3(result, 3, 1);
const slope3 = day3(result, 5, 1);
const slope4 = day3(result, 7, 1);
const slope5 = day3Slope2(result, 1, 2);

console.log("Part A: " + slope5);
console.log("Part B: " + slope1*slope2*slope3*slope4*slope5);

