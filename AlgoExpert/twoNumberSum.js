/*
Two nested loop
With first loop getting started index i = 0
With second loop getting started index j = i + 1
*/

// O(n^2) Time | O(1) space
const twoNumberSum = (array, targetSum) => {
  let finalArray = [];

  for (let idx = 0; idx < array.length - 1; idx++) {
    const firstNum = array[idx];
    for (let jdx = idx + 1; jdx < array.length; jdx++) {
      const secondNum = array[jdx];
      if (firstNum + secondNum === targetSum) {
        finalArray.push(firstNum, secondNum);
      }
    }
  }

  return finalArray;
};

/*
Sorted the array ==> [-4, -1, 1, 3, 5, 6, 8, 11]
Initialize two pointer, the first one from index 0, the second one from the last element of the array
Try some possibilities
    * If value from left & right is match with target Sum ==> Return the value
    * If value from left & right is < targetSum ==> leftPointer to the right
    * If value from left & right is > targetSum ==> righPointer to the left
*/

// O(nlog(n)) n Time | O(1) space
const twoNumberSum2 = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const potentialMatch = array[left] + array[right];

    if (potentialMatch === targetSum) {
      return [array[left], array[right]];
    } else if (potentialMatch < targetSum) {
      left++;
    } else if (potentialMatch > targetSum) {
      right++;
    }
  }

  return [];
};

const twoNumberSum3 = (array, targetSum) => {
  const nums = new Map();

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (nums.has(potentialMatch)) {
      return [potentialMatch, num];
    } else {
      nums.set(num, true);
    }
  }

  return [];
};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
