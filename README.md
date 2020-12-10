## Advent of Code 2020

Check out the challenges [here](https://adventofcode.com/2020/about)!

An attempt to challenge myself to get through as much of Advent of Code 2020!

|Day|Part 1|Part 2|Challenge|
|:-:|:----:|:----:|:--------|
| 1 | Done |Done  |[Day 1](https://adventofcode.com/2020/day/1)|
| 2 | Done |Done  |[Day 2](https://adventofcode.com/2020/day/2)| 
| 3 |      |      |[Day 3](https://adventofcode.com/2020/day/3)|

### **Day 1**

**Part 1** <br>
Utilized nested loops to get through the array puzzle and using if statement to console.log the 2 array elements that sums up to 2020 and the multiplication of the two elements, which is the answer for the puzzle! <br>

**Part 2** <br>
Tried to use 3 layer of nested loop and timed out in trying to execute the program. Definitely not a good idea! Utilized `.forEach` to mimic the first iteration of nested loop and using 2 layer nested loop to return the multiplication of the 3 elements. <br>

### **Day 2**

**Part 1** <br>
Read input data using `readFileSync` and by using `.replace` and `.split` to clean up data. Also utilize regex constructor `new RegExp` to set up using `.match` to return the number of matched alphabet pair with the password. Then, compared it with the upper and lower limit of the allowable number of alphabet and increment a counter for every match which is the answer for part 1. <br>

**Part 2** <br>
Input data is from part 1. With using a `-1` for the index position where the alphabets are checked, as elements start from index [0]. Using an if statement and `.charAt` string method to check if the alphabet exists once, twice or not at all on the required index position and increment a counter only for valid passwords. <br>