/*
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
*/

/*
Sort the array ==> [0,1,2,3,4,5,6,7,9]
Looping through the array
Making condition  
    * If nextNumber !=== prevNumber + 1 Return those element
*/

const findMissingNumber = (nums) => {
  nums.sort((a, b) => a - b);

  let missingNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const nextValue = nums[i + 1];

    if (nums[0] === 0 && nums.length === 1) {
      return currentValue + 1;
    }

    if (nextValue !== currentValue + 1) {
      missingNumber = currentValue + 1;
      break;
    }
  }

  return missingNumber;
};

var missingNumber = function (nums) {
  let len = nums.length; //3
  let sum = len; // 3
  for (let i = 0; i < len; i++) {
    sum = sum + i - nums[i];
    // 3 = 3 + 0 - 3 ====> 0
    // 0 = 0 + 1 - 0 ====> 1
    // 1 = 1 + 2 - 1 ====> 2
  }
  return sum;
};

var missingNumber2 = function (nums) {
  let len = nums.length;
  let sum = 0;
  sum = nums.reduce((a, b) => {
    return a + b;
  }, 0);

  return Math.floor((len * (len + 1)) / 2) - sum;
  //   3 * 4 / 2 - 4
};

var missingNumber3 = function (nums) {
  // sort the array
  nums = nums.sort((a, b) => a - b); // [0,1,3]
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
};

const missingNumber4 = (nums) => {
  if (!nums) return;
  let tempArray = new Array(nums.length + 1).fill(-1);
  console.log(tempArray);
  for (let num of nums) {
    tempArray[num] = num;
  }
  console.log(tempArray);
  return tempArray.indexOf(-1);
};

console.log(missingNumber4([3, 0, 1]));
