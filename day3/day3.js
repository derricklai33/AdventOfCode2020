const fs = require('fs');
const readInput = fs.readFileSync('./day3data.txt', 'utf8');

// split data into 2D array
// Made the array long enough to complete the whole toboggan trajectory
// Not the best practice for and accurate solution for the data set-up
// but will do in this instance
const data = readInput.split('\n');
const result = data.map((item) => {
  const tempString = item;
  for (let i = 0; i < Math.round(data.length); i++) {
    item += tempString;
  }
  return item;
});

// Constants
const yAxisLimit = result.length;
const tree = '#';

// slopeDown is the starting position of the first iteration and also
// the slopeDown count increment. slopeRight is the requirement for
// slope right. 
const day3 = (arr, slopeRight, slopeDown) => {
  let xAxis = 0;
  let treeCount = 0;
  for (yAxis = slopeDown; yAxis < yAxisLimit; yAxis += slopeDown) {
    for (i = 0; i < slopeRight; i++) {
      xAxis++;
    }  
    if (arr[yAxis][xAxis] === tree) {
      treeCount++;
    }
  }
  return treeCount;
}

// Setting tree count answers to constant
const slope1 = day3(result, 1, 1);
const slope2 = day3(result, 3, 1);
const slope3 = day3(result, 5, 1);
const slope4 = day3(result, 7, 1);
const slope5 = day3(result, 1, 2);

// Display results/answer
console.log("Part A: " + slope2);
console.log("Part B: " + slope1*slope2*slope3*slope4*slope5);

