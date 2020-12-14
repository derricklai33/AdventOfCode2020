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
  for (let start = 0; start < totalRow; start++) {
    tempRow.push(start);
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
  for (let start = 0; start < totalCol; start++) {
    tempCol.push(start);
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
  return (Math.max(...ansArr));
}

const resultArr = splitArray(readInput);
const answerPartA = partA(resultArr);

console.log("Answer for part A is: " + answerPartA);