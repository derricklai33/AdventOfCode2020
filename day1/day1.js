const fs = require('fs');
const readInput = fs.readFileSync('./day1data.txt', 'utf8')

const splitArray = (string) => {
  const splitData = string.replace(/\n/g, " ");
  const dataArray = splitData.split(" ");
  return dataArray.map(item => parseInt(item));
}

puzzleArray = splitArray(readInput)

// Part 1 
console.log("Part 1")

for (let i = 0; i < puzzleArray.length; i++) {
  for (let j = i+1; j < puzzleArray.length; j++) {
    if (puzzleArray[i] + puzzleArray[j] === 2020) {
      console.log(puzzleArray[i]);
      console.log(puzzleArray[j]);
      console.log(puzzleArray[i]*puzzleArray[j]);
    }
  }
}

// Part 2
console.log("Part 2")
// for (let k = 0; k < puzzleArray.length; k++) {
//   for (let l = k+1; l < puzzleArray.length; l++) {
//     for  (let m = l+1; k < puzzleArray.length; m++) {
//       if (puzzleArray[k] + puzzleArray[l] + puzzleArray[m] === 2020) {
//         console.log(puzzleArray[k]);
//         console.log(puzzleArray[l]);
//         console.log(puzzleArray[m]);
//       }
//     }
//   }
// }

puzzleArray.forEach(element => {
  for (let i = puzzleArray.indexOf(element)+1; i < puzzleArray.length; i++) {
    for (let j = i+1; j < puzzleArray.length; j++) {
      if (element + puzzleArray[i] + puzzleArray[j] === 2020) {
        console.log(element);
        console.log(puzzleArray[i]);
        console.log(puzzleArray[j]);
        console.log(element * puzzleArray[i] * puzzleArray[j]);
      }
    }
  }
});