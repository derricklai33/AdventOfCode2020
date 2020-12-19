const fs = require('fs');
const readInput = fs.readFileSync('./day10data.txt', 'utf8');

const getData = (data) => {
  const result = data.split('\n');
  const final = result.map(item => {
    return parseInt(item);
  })
  // Sorting function in ascending order
  return final.sort((a,b) => a - b)
};

// Part A
const partA = (arr) => {
  let j = 1;
  let differenceOne = 1;
  let differenceThree = 1;
  // For loop will compare two 
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] - arr[i] === 1) {
      differenceOne++;
    } else if (arr[j] - arr[i] === 3) {
      differenceThree++;
    }
    j++;
  }
  return differenceOne * differenceThree;
};

// Part 2 requires recursion. Youtube for my answers instead and learn!

// Invoke function
const finalData = getData(readInput);
const partAResult = partA(finalData);

// Console.log answer
console.log("Answer for Part 1 is: " + partAResult);
