const fs = require('fs');
const readInput = fs.readFileSync('./day6data.txt', 'utf8')

const getData = (data) => {
  const split = data.split('\n\n');
  const result = split.map(item => {
  return item.replace(/\n/g, " ");
})
  const finalResult = result.map(item => {
    return item.split(' ');
  })
  return finalResult
}

// Unique array function. This returns all of the unique characters
// for each group
const uniqArr = (arr) => {
  let array = [];
  // Joins all array element into a giant string.
  const result = arr.map(item => {
    return item.join('');
  })
  result.forEach(item => {
    // Spread operator and using set. Set creates new object that can 
    // contain only uniq characters from the combined string
    let uniq = [...new Set(item)];
    array.push(uniq);
  })
  return array
}

// Part A, counts the unique characters that each group contains 
// total the length of each array element and that's the answer
const partA = (arr) => {
  let count = 0;
  arr.forEach(item => {
    count += item.length
  })
  return count;
}

// 
const partB = (arr, uniqArr) => {
  let ansArr = [];
  // First loop, iterating through all the group and unique element array
  // returned from the uniqArr function
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i];
    const array = uniqArr[i];
    // This loop is used to loop through the unique element array for 
    // each group
    for(let j = 0; j < array.length; j++) {
      let charCount = 0;
      result.forEach(item => {
        // The .includes increments the count to check if each group's 
        // person has the same characters
        if (item.includes(`${array[j]}`)) {
          charCount++;
        }
      })
      // If the incremented count === the number of person, means everyone
      // in the group answered 'Yes' for that question
      if (charCount === result.length) {
        ansArr.push(array[j]);
      }
    }
  }
  return ansArr.length;
}


// Invoke function
const endData = getData(readInput);
const uniqueArray = uniqArr(endData);
const partAResult = partA(uniqueArray);
const partBResult = partB(endData, uniqueArray);

// Console.log answer
console.log("Answer for part A is: " + partAResult);
console.log("Answer for Part 2 is: " + partBResult);