/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/*
- Looping thorugh the array
- Multiply each value of array by themselves
- Then, we gonna sort the array
- Return the sorted array
*/

const squaredOfSortedArray = (nums) => {
  let finalArray = [];

  for (const num of nums) {
    finalArray.push(num * num);
  }

  finalArray.sort((a, b) => a - b);

  return finalArray;
};

const result = squaredOfSortedArray([-4, -1, 0, 3, 10]);

console.log(result);
