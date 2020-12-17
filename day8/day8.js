const fs = require('fs');
const readInput = fs.readFileSync('./day8data.txt', 'utf8')

// Data is first split by \n which returns an array and further
// split by ' ' to separate the array into header and answer
const getData = (data) => {
  const result = data.split('\n');
  const final = result.map(item => { return item.split(' ') });
  return final
}


const partA = (arr) => {
  let accumulator = 0;
  // Using a tracker array, the i (the instruction index) is pushed
  // every time a command executes and using .includes to terminate
  // the loop when the instruction runs again the 2nd time
  let tracker = [];
  for(let i = 0; i < arr.length; i++) {
    if (tracker.includes(i)) { break };
    // arr[i][0] is the heading, which contains 'acc', 'jmp' or 'nop'
    // arr[i][0] is the instruction value, e.g. +100 or -20
    switch(arr[i][0]) {
      case 'acc':
        accumulator += parseInt(arr[i][1]);
        tracker.push(i);
        break;
      case 'jmp':
        i += parseInt(arr[i][1] - 1);
        tracker.push(i);
        break;
      case 'nop':
        tracker.push(i);
        break;
    }
  }
  return accumulator;
}

// Function invoke
const finalData = getData(readInput);
const partAResult = partA(finalData);

// Console log answers
console.log("The answer for Part A is: " + partAResult);