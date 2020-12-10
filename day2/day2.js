const fs = require('fs');
const readInput = fs.readFileSync('./day2data.txt', 'utf8')

// Data input clean up and splitting
const data = (string) => {
  const data = string.split('\n');
  const split = data.map((item) => {
    const sorted = item.replace('-', ' ');
    return sorted.split(' ');
  });
  return split;
}

// Invoke read input function
const result = data(readInput);

// Part A

const partA = (arr) => {
  let endCount = 0;
  arr.forEach((item) => {
    let password = item[3];
    // Regex expression for keyword. e.g. '/i/gi'
    let keyword = new RegExp(`${[item[2].charAt(0)]}`, "gi");
    // Regex operation .match to check how many password is valid
    let count = password.match(keyword);
    // As the regex operation returns NULL in cases of 
    // .match not finding any matches, replaces null with 0.
    // .length will not work if there are NULL values in the array
    if (!count) {
      count = 0;
    }
    if (count.length >= parseInt(item[0]) && count.length <= parseInt(item[1])) {
      endCount++;
    }
  })
  return endCount
}

// Part B
// const partB = (arr) => {

// }

console.log("Result for Part A is: "+ partA(result));