const { count } = require('console');
const fs = require('fs');
const readInput = fs.readFileSync('./day7data.txt', 'utf8')

const getData = (data) => {
  const result = data.split('\n');
  const final = result.map(item => {
    return item.split(' ');
  })
  return final;
} 

const partA = (arr) => {

  let thirdLevelArr = [];
  let finalArr = [];
  let finalFinal = [];
  let superFinal = [];
  let ultraFinal = [];
  arr.forEach(item => {
    const temp = item.slice(2);
    const result = temp.join(' ');
    if(result.includes('shiny gold')) {
      let ans = item;
      finalArr.push(ans);
    }
  })
  finalArr.forEach(item => {
    finalFinal.push(item[0] + ' ' + item[1]);
  })

  for (let i = 0; i < finalFinal.length; i++) {
    arr.forEach(item => {
      const temp = item.slice(2);
      const result = temp.join(' ');
      if (result.includes(finalFinal[i])) {
        thirdLevelArr.push(item[0] + ' ' + item[1]);
      }
    })
  }

  let count = 0;
  arr.forEach(item => {
    const temp = item.slice(2);
    const result = temp.join(' ');
    for(j = 0; j < thirdLevelArr.length; j++) {
      if (result.includes(thirdLevelArr[j])) {
        superFinal.push(item[0] + ' ' + item[1])
        count++;
      }
    }
  })
  console.log(finalFinal);
  console.log(thirdLevelArr);
  console.log(superFinal);
  ultraFinal.push(finalFinal, thirdLevelArr, superFinal)
  const superDuperFinal = ultraFinal.flat(1);
  console.log(superDuperFinal.length)
  console.log(count)
}


const finalData = getData(readInput);
const partAResult = partA(finalData);