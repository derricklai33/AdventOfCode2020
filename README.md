## Advent of Code 2020

Check out the challenges [here](https://adventofcode.com/2020/about)!

An attempt to challenge myself to get through as much of Advent of Code 2020!

|Day|Part 1|Part 2|Challenge|
|:-:|:----:|:----:|:--------|
| 1 | Done |Done  |[Day 1](https://adventofcode.com/2020/day/1)|
| 2 | Done |Done  |[Day 2](https://adventofcode.com/2020/day/2)| 
| 3 | Done |Done  |[Day 3](https://adventofcode.com/2020/day/3)|
| 4 |      |      |[Day 4](https://adventofcode.com/2020/day/4)|

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

### **Day 3**

**Part 1** <br>
Read input data using `readFileSync`, splitting the data into 2D arrays(technically it is a 2D array but without splitting the strings). The set-up for the input data is not done perfectly as I have just concatenate the array long enough for this exercise. Then used a for loop to iterate through the array to count the columns/y-axis and within the for loop, another counter is set up to iterate by x-amount per y-axis iteration. This can be changed to suit different slope down and slope right requirements. The elements are then compared using an if statement to increment a counter which will return the tree count. <br>

**Part 2** <br>
Steps are identical for part 1. Repeated part 1 for 5 different scenarios and multiplied to get the final answer.


