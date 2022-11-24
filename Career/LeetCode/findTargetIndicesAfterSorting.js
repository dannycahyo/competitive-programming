/*
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.

Input: nums = [1,2,5,2,3], target = 4
Output: []
Explanation: There are no elements in nums with value 4.
*/

/*
Pseudo Code :
    - Sorting the array ==> [1,2,2,3,5]
    - Traverse into the array to scan all of the number based on target
    - Making condition if the number equals to target, push the index into the new array
    - Return the new array
*/

const targetIndices = (nums, target) => {
  let finalIndices = [];
  nums.sort((a, b) => a - b);

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === target) finalIndices.push(idx);
  }

  return finalIndices;
};

var targetIndices2 = function (nums, target) {
  nums.sort((a, b) => a - b);

  let ans = [];
  let idx = nums.indexOf(target);
  console.log(idx);
  if (idx !== -1) {
    while (idx < nums.length && nums[idx] === target) {
      ans.push(idx);
      idx++;
    }
  }
  return ans;
};

const targetIndices3 = (nums, target) =>
  nums
    .sort((a, b) => a - b)
    .reduce((acc, val, index) => (val === target ? [...acc, index] : acc), []);

console.log(targetIndices3([1, 2, 5, 2, 3], 2));
