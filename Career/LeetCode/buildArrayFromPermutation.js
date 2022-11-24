/*
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

/*
Initialize empty array
Traverse to the array
Push new value into the new array
    * Value nya dari ==> value dari index original array
*/

const buildArrayFromPermutation = (array) => {
  return array.map((num) => array[num]);
};

const buildArrayFromPermutation2 = (array) => {
  // Initialize empty array for making new array
  let finalArray = [];
  //   // Traverse into the array in order to get every value and the index
  for (let idx = 0; idx < array.length; idx++) {
    finalArray.push(array[array[idx]]);
  }
  return finalArray;
};

/*
Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
*/

const buildArrayFromPermutation3 = (array) => {
  let nums_new = [...array];
  for (let i = 0; i < array.length; i++) {
    nums_new[i] = array[array[i]];
  }
  return nums_new;
};

console.log(buildArrayFromPermutation([5, 0, 1, 2, 3, 4]));
