const { info } = require('console');
const fs = require('fs');
const readInput = fs.readFileSync('./day4data.txt', 'utf8')

const data = readInput.split('\n\n');
const result = data.map(item => {
  return item.replace(/\n/g, " ");
})

const finalResult = result.map(item => { 
  return item.split(' ') 
});

const mustHaveInfo = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let ansArr = [];

const partA = (arr) => {
  // The first loop is to iterate through all of the passports
  // The .forEach loop is to iterate through every element/info of
  // the passport and using a `for of` loop to iterate through the 
  // details a passport must have and using .includes to check if the 
  // passport contains the necessary information and `.push` the info
  // onto an array separated by each passport.
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    arr[i].forEach(item => {
      for (let info of mustHaveInfo) {
        if (item.includes(info)) {
          tempArr.push(info);
        }
      }
    })
    ansArr.push(tempArr);
  }

  // Counts the number of valid passports by comparing how many 
  // variables is stored in each iteration of the array. As the only
  // valid passports are the ones that contains all 7 variables,
  // count can be incremented to count the number of valid passports
  let count = 0;
  ansArr.forEach(item => {
    if (item.length === 7) {
      count ++;
    }
  })
  return count;
}

console.log("The number of valid passports are: " + partA(finalResult));
