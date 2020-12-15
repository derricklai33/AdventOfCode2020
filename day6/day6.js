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

const partA = (arr) => {
  // Initialize count
  let count = 0;
  // Joins all array element into a giant string.
  const result = arr.map(item => {
    return item.join('');
  })
  result.forEach(item => {
    // Spread operator and using set. Set creates new object that can 
    // contain only uniq characters from the combined string
    let uniq = [...new Set(item)];
    count += uniq.length;
  })
  return count;
}

// Invoke function
const endData = getData(readInput);
const PartAResult = partA(endData);

// Console.log answer
console.log("Answer for part A is: " + PartAResult);