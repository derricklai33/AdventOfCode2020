const fs = require('fs');
const readInput = fs.readFileSync('./day9data.txt', 'utf8');

const getData = (data) => {
  const result = data.split('\n');
  return result.map(item => {
    return parseInt(item);
  })
};

// Checking for unique pair using nested loop, target is the targeted
// value and arr is the previous 25 numbers. Loop returns true if previous
// 25 numbers sums to be target value and returns false if not found
const pairSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

// Part A
const partA = (arr) => {
  for (let i = 25; i < arr.length; i++) {
    // .slice to get previous 25 numbers to check
    let numbers = arr.slice(i-25, i);
    // calls pairSum function to check if condition is true
    if (pairSum(numbers, arr[i]) === false) {
      return arr[i];
    }
  }
};

// Part B
const partB = (arr, wrongNumber) => {
  let answerArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tempNum = arr[i];
    for( let j = i + 1; j < arr.length; j++) {
      tempNum += arr[j];
      if(tempNum === wrongNumber) {
        for(let start = i; start < j; start++) {
          answerArr.push(arr[start]);
        }
      }
    }
  }
  const min = Math.min(...answerArr);
  const max = Math.max(...answerArr);
  return (min + max);
};

// Initialize function
const finalData = getData(readInput);
const partAResult = partA(finalData);
const partBResult = partB(finalData, partAResult);

// Console log answer
console.log("Result for Part 1 is: " + partAResult);
console.log("Result for Part 2 is: " + partBResult);