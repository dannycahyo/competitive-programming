/*
- Initize the minimum index of first duplicate number
- Looping thorugh the array for the first pointer
- Looping again to get the second pointer
- Compare the first iterator with the second one
- Save the index of the duplicate into the varible
- Handle edge cases where there is no duplicate number
*/

// ==========> O(N)2 Time O(N) Space
// [2, 1, 5, 2, 3, 3, 4]
const findDuplicateNumber = (nums) => {
  let minimumIndex = nums.length;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const valueToCompare = nums[j];
      if (value === valueToCompare) {
        minimumIndex = Math.min(minimumIndex, j);
        // console.log(j);
      }
    }
  }

  if (nums.length === minimumIndex) {
    return -1;
  }

  return nums[minimumIndex];
};

// ======================>> O(n) Time O(n) space
const findDuplicateNumber2 = (nums) => {
  let seen = new Set();

  for (const num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
    } else {
      return num;
    }
  }

  return -1;
};

const findDuplicateNumber3 = (nums) => {
  for (const num of nums) {
    const absoluteValue = Math.abs(num);
    if (nums[absoluteValue - 1] < 0) {
      return absoluteValue;
    } else {
      nums[absoluteValue - 1] *= -1;
    }
  }

  return -1;
};

/**
 * 2 - 1 < 0 ? No it's not ==> [2, -1, 5, 2, 3, 3, 4]
 * 1 - 1 < 0 ? No it's not ==> [-2, -1, 5, 2, 3, 3, 4]
 * 5 - 1 < 0 ? Not it's not ==> [-2, -1, 5, 2, -3, 3, 4]
 * 2 - 1 (-1) < 0 ? Yes it it => So we going to return the value
 */

console.log(findDuplicateNumber3([2, 1, 5, 2, 3, 3, 4]));
