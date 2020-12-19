## Advent of Code 2020

Check out the challenges [here](https://adventofcode.com/2020/about)!

An attempt to challenge myself to get through as much of Advent of Code 2020!

|Day|Part 1|Part 2|Challenge|
|:-:|:----:|:----:|:-------:|
| 1 | Done | Done |[Day 1](https://adventofcode.com/2020/day/1)|
| 2 | Done | Done |[Day 2](https://adventofcode.com/2020/day/2)| 
| 3 | Done | Done |[Day 3](https://adventofcode.com/2020/day/3)|
| 4 | Done | Done |[Day 4](https://adventofcode.com/2020/day/4)|
| 5 | Done | Done |[Day 5](https://adventofcode.com/2020/day/5)|
| 6 | Done | Done |[Day 6](https://adventofcode.com/2020/day/6)|
| 7 |      |      |[Day 7](https://adventofcode.com/2020/day/7)|
| 8 | Done |      |[Day 8](https://adventofcode.com/2020/day/8)|
| 9 | Done | Done |[Day 9](https://adventofcode.com/2020/day/9)|
|10 | Done |      |[Day 10](https://adventofcode.com/2020/day/10)|
|11 |  |      |[Day 11](https://adventofcode.com/2020/day/11)|

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
Steps are identical for part 1. Repeated part 1 for 5 different scenarios and multiplied to get the final answer. <br>

### **Day 4**

**Part 1** <br>
Input data is read and cleaned up using `.split` and `.replace`. Utilizing for loop to iterate through each individual passport, and using a `.forEach` loop to iterate through each passport's information and using `.includes` to check if the passport contains the corresponded information. The information are then `.push` into an array(`ansArr`) to be used to check if each passport contains enough valid information to be a valid passport. `ansArr` is then iterated through to check if the elements in the array contains 7 required information for a valid passport and increments a counter for every valid passport. The counter then totals up to the answer for valid passports. <br>

**Part 2** <br>
Using the input data from Part 1, using `.split` again on the ':' of the input data. This allows the string data from each passport to be split between the 'heading' and the information part of the data. The data are then put into a for loop with switch statement to sort out valid information that are accepted as valid passports (check code to see switch statement). The information are then pushed onto a temporary array, which is then pushed again into `ansArr`, where it is checked using an if statement to see if the array length for each passport is equals to  7 (same as Part 1, where valid passports has 7 must have information). A counter is incremented every time a valid passport is checked and that is the answer for Part 2! <br>

### **Day 5**

**Part 1** <br>
Data is read and cleaned up using `.split` on newlines and further `.slice` on the 7th element, which separates the row and columns. Iterating through each boarding pass and using if statements and a pre-defined array of 0..128, depending on if the character is a `F` or `B`, the array is halved and the desired half of the array is preserved/mapped. The process repeats until only 1 element is remaining, for both row and columns. The elements are then multiplied and added to give the resulting boarding pass ID. Finally, using `Math.max`, the highest boarding pass ID is found and that is the answer for Part 1! <br>

**Part 2** <br>
Using the array returned from Part 1, using a for loop, with the starting element be the smallest boarding ID - 1 and the loop condition to be highest element boarding ID + 1. And using `.includes` and the not operator `!`, the return value is the answer for Part 2! <br>

### **Day 6**

**Part 1** <br>
Data is read and cleaned up using `.split` and `.replace` using regex to seperate data into array of arrays, separating each group's answer and also each person's answer within each group. Then using the `uniqArr` function, using `.join`, the data are then concatenated into a giant string and using the spread and set operator, it returns an array containing only unique characters. The array is then iterated and increment a count for each unique character that is counted and that is the answer for Part 1! <br>

**Part 2** <br>
Reusing data from part 1 and the `uniqArr` array, using `.include` and for loop to iterate through the array returned from `uniqArr` and iterating through the cleaned up input data. By incrementing a count every time each `.include` returns true, it is then compared using an if statement against the number of people per group. If the if statement of the counter === number of people in a group, this equates to every person in the group answering yes to the same question. The question (just the character) is pushed into an array (`ansArr`) and the array length is the answer for part 2! <br>

### **Day 7**

#### **Unable to Complete Part 1 & 2** <br>

### **Day 8**

**Part 1** <br>
Data is read and cleaned up using `.split` by '\n' and ' ' which separates the data into a 'heading' and its information. Using a tracking array `tracker` and for loop to iterate through the instructions and execute them. By using a switch case statement, a `jmp` instruction will increase or decrease the for loop counter, which mimics the 'instruction jumps' and a `acc` instruction will increase or decrease the accumulator accordingly and a `nop` instruction will simply increase the for loop counter by 1, which mimics the next set of instruction to be executed. And by pushing the for loop counter element into the `tracker` array and using `.includes`, the counter can be broken using an if statement if the same set of instruction occurs again and return the `accumulator` element, which is the answer for Part 1! <br>

**Part 2** <br>
#### **Unable to Complete Part 2** <br>

### **Day 9**

**Part 1** <br>
Input data was cleaned up using `.split` on newlines('\n) and and parseInt to turn them into integers. Also, using a `pairSum` function to check if there is a unique combination of numbers from the array(`arr`) that equals to the `target` value and returns false if there is not a pair found. The function `partA` starts the for loop iteration at `i=25` as the first 25 numbers does not need to be checked. The iteration then returns the array element when `pairSum` function returns a false and that array element is the answer for Part 1! <br>

**Part 2** <br>
Reusing the answer from Part 1 and using a nested loop, the iteration of the nested loop is iterated through using `tempNum` to continuously add values from the 2nd layer of the nested loop. Using an if statement, when the sum of `tempNum` equals the `wrongNumber`, which is the answer from Part 1, another for loop is used to `.push` elements from within the range of the nested loop `i` and `j` into `ansArr`. Finally, using `Math.min` and `Math.max` to find the minimum and maximum value from the array and return the sum of `min` and `max`, which is the answer for Part 2! <br>

### **Day 10**

**Part 1** <br>
Data input was cleaned up using `.split` on newlines ('\n'), converted string to int using `parseInt()` function and also sorted using `.sort` with with a function expression of `a - b`. If `a-b` returns < 0, a is before b, if `a-b` returns 0, no need to change its position and if `a-b` returns > 0, b is before a. This will result in an array arranged in ascending order. The array is then simply compared with the element of the array at index[i] and index[i+1]. If the difference is 3, increment the count of `differenceThree` and if the difference is 1, increment count of `differenceOne`. Finally, return the multiplication of `differenceOne` and `differenceThree` and that is the answer for Part 1! <br>

**Part 2** <br>
#### **Unable to Complete Part 2** <br>
