const fs = require('fs');
const readInput = fs.readFileSync('./day5data.txt', 'utf8')

const totalRow = 128;
const totalCol = 8;

const splitArray = (data) => {
  const arr = data.split("\n");
  const result = arr.map(item => {
    let tempArr = []
    let arr1 = item.slice(0,7);
    let arr2 = item.slice(7);
    tempArr.push(arr1);
    tempArr.push(arr2);
    return tempArr;
  })
  return result;
}

const rowFinder = (string) => {
  let tempRow = [];
  for (let row = 0; row < totalRow; row++) {
    tempRow.push(row);
  }

  for(let i = 0; i < string.length;i++) {
    if(string[i].toLowerCase() === 'f') {
      tempRow = tempRow.slice(0, Math.floor(tempRow.length/2));
    } else if (string[i].toLowerCase() === 'b') {
      tempRow = tempRow.slice(Math.floor(tempRow.length/2), tempRow.length);
    }
  }
  return tempRow;
}

const colFinder = (string) => {
  let tempCol = [];
  for (let col = 0; col < totalCol; col++) {
    tempCol.push(col);
  }

  for(let i = 0; i < string.length;i++) {
    if(string[i].toLowerCase() === 'l') {
      tempCol = tempCol.slice(0, Math.floor(tempCol.length/2));
    } else if (string[i].toLowerCase() === 'r') {
      tempCol = tempCol.slice(Math.floor(tempCol.length/2), tempCol.length);
    }
  }
  return tempCol;
}

const partA = (arr) => {
  let ansArr = [];
  arr.forEach(item => {
    let row = rowFinder(item[0]);
    let col = colFinder(item[1]);
    ansArr.push((parseInt(row) * 8) + parseInt(col));
  })
  return ansArr;
}

const partB = (arr) => {
  for(let i = Math.min(...arr) + 1; i < Math.max(...arr) - 1; i++) {
    if(!arr.includes(i)) {
      return i;
    }
  }
}

const resultArr = splitArray(readInput);
const answerPartA = Math.max(...(partA(resultArr)));
const answerPartB = partB(partA(resultArr));

console.log("Answer for part A is: " + answerPartA);
console.log("Answer for part B is: " + answerPartB);

