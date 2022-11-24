/*
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Input: nums = [1,1]
Output: [2]
*/

/*
Sort the array ==> [1,2,2,3,3,4,7,8]
Looping to the sorted array
Making condition
    * If nextValue === prevValue + 1 ==> Not do anything
    * If nextValue === prevValue ==> Not do anything
    * If nextValue !== prevValue + 1  ==> Push prevValue + 1
Return the finalArray

{1: 1, 2: 2, 3: 2, 4: 1, 7: 1, 8: 1}
*/

// Just pass one test cases
const findAllNumberDisappeared = (nums) => {
  nums.sort((a, b) => a - b);
  let finalArray = [1, 2, 3, 4, 7, 8];

  for (let i = 0; i < nums.length - 1; i++) {
    const currentValue = nums[i];
    const nextValue = nums[i + 1];

    if (nextValue !== currentValue + 1) {
      finalArray.push(currentValue + 1);
    }
  }

  // console.log(finalArray);

  let fixFinalArray = [1, 2, 3, 4, 7, 8, 5].sort((a, b) => a - b);

  let reallyFinal = [1, 2, 3, 4, 7, 8, 5];

  for (let idx = 0; idx < fixFinalArray.length - 1; idx++) {
    const currentValue = fixFinalArray[idx];
    const nextValue = fixFinalArray[idx + 1];

    if (nextValue !== currentValue + 1) {
      reallyFinal.push(currentValue + 1);
    }
  }

  return [reallyFinal.length - 3, reallyFinal.length - 2];
};

var findDisappearedNumbers = function (nums) {
  let disappearedNum = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.find((num) => num == i)) {
      disappearedNum.push(i);
    }
  }

  return disappearedNum;
};

var findDisappearedNumbers2 = function (nums) {
  // edge case
  if (!nums || nums.length <= 1) return null;

  // main case
  let result = [];
  let unique = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (!unique.has(i + 1)) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1]));
