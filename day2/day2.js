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
    // Regex expression for keyword. e.g. '/i/gi' and using charAt(0)
    // as the array element contains a ':' e.g. 'q:'
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
      // Count increment when a valid password is found
      endCount++;
    }
  })
  return endCount;
}

// Part B
const partB = (arr) => {
  let endCount = 0;
  arr.forEach((item) => {
    let password = item[3];
    // Used charAt(0) as the array element contains a ':' e.g. 'q:'
    let keyword = item[2].charAt(0);
    // To point elements starting from position 0.
    let position1 = item[0] - 1;
    let position2 = item[1] -1;
    if (password.charAt(position1) === keyword && password.charAt(position2) === keyword) {
      // Do nothing
    } else if (password.charAt(position1) === keyword || password.charAt(position2) === keyword) {
      // Count increment when a valid password is found
      endCount++;
    }
  });
  return endCount;
}

console.log("Result for Part A is: " + partA(result));
console.log("Result for Part B is: " + partB(result));