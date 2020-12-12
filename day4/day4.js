const fs = require('fs');
const readInput = fs.readFileSync('./day4data.txt', 'utf8')

// Sorting data
const data = readInput.split('\n\n');
const result = data.map(item => {
  return item.replace(/\n/g, " ");
})
const finalResult = result.map(item => { 
  return item.split(' ') 
});

// Const to be used
const mustHaveInfo = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const eyeColour = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const hclCheck = /^[0-9a-f]+$/;

const setUp = (arr) => {
  // The first loop is to iterate through all of the passports
  // The .forEach loop is to iterate through every element/info of
  // the passport and using a `for of` loop to iterate through the 
  // details a passport must have and using .includes to check if the 
  // passport contains the necessary information and `.push` the info
  // onto an array separated by each passport.
  let ansArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    arr[i].forEach(item => {
      for (let info of mustHaveInfo) {
        if (item.includes(info)) {
          tempArr.push(item);
        }
      }
    })
    ansArr.push(tempArr);
  }
  return ansArr;
}

// Counts the number of valid passports by comparing how many 
// variables is stored in each iteration of the array. As the only
// valid passports are the ones that contains all 7 variables,
// count can be incremented to count the number of valid passports
const partA = (arr) => {
  let count = 0;
  arr.forEach(item => {
    if (item.length === 7) {
      count ++;
    }
  })
  return count;
}

const partB = (arr) => {
  let ansArr = [];
  for (let i = 0; i < arr.length; i++) {
    // This split allows a passport's information to be split into 2 parts
    // The header and the information, e.g. [ecl], [blu], so that it is
    // easier to check for its header to be subjected to different checks
    resultInB = arr[i].map(item => {
      return item.split(":");
    })
    let tempArr = [];
    for (let i = 0; i < resultInB.length; i++) {
      // This switch statement is used to check for each individual
      // passport for if the passport contains the relevant information.
      // The switch case is then subjected to another check, using if and
      // .includes for ecl (iterating through an array of possible matches)
      // If value matches, the elements are pushed to a temp array, which
      // is then pushed to ansArr, where the number of elements are counted
      switch (resultInB[i][0]) {
        case 'byr':
          if (parseInt(resultInB[i][1]) >= 1920 && parseInt(resultInB[i][1]) <= 2002) {
            tempArr.push(resultInB[i][1]);
          }
          break;
        case 'iyr':
          if (parseInt(resultInB[i][1]) >= 2010 && parseInt(resultInB[i][1]) <= 2020) {
            tempArr.push(resultInB[i][1]);
          }
          break;
        case 'eyr':
          if (parseInt(resultInB[i][1]) >= 2020 && parseInt(resultInB[i][1]) <= 2030) {
            tempArr.push(resultInB[i][1]);
          }
          break;
        case 'hgt':
          let hgtMeasurement = resultInB[i][1].slice(resultInB[i][1].length - 2)
          let hgtNumber = resultInB[i][1].slice(0, resultInB[i][1].length - 2)
          if (hgtMeasurement === 'cm') {
            if (parseInt(hgtNumber) >= 150 && parseInt(hgtNumber) <= 193) {
              tempArr.push(resultInB[i][1]);
            }
          } else if (hgtMeasurement === 'in') {
            if (parseInt(hgtNumber) >= 59 && parseInt(hgtNumber) <= 76) {
              tempArr.push(resultInB[i][1]);
            }
          }
          break;
        case 'hcl':
          splitEle = resultInB[i][1].slice(1);
          if (resultInB[i][1].charAt(0) === '#' && splitEle.match(hclCheck) && resultInB[i][1].length === 7) {
            tempArr.push(resultInB[i][1]);
          }
          break;
        case 'ecl':
          eyeColour.forEach(item => {
            if (resultInB[i][1].includes(item)) {
              tempArr.push(resultInB[i][1]);
            }
          })
          break;
        case 'pid':
          if (resultInB[i][1].length === 9) {
            tempArr.push(resultInB[i][1]);
          }
          break;
      }
    }
    ansArr.push(tempArr);
  }
  
  // Increment count for every valid passport. If passport has 7 elements,
  // that means passport is valid.
  let count = 0;
  ansArr.forEach(item => {
    if (item.length === 7) {
      count++;
    }
  })
  return count;
}

const setupArray = setUp(finalResult);
console.log("The number of valid passports for partA are: " + partA(setupArray));
console.log("The number of valid passports for partB are: " + partB(setupArray));