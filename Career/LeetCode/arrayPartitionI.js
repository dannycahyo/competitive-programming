/*
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

 [6,2,6,5,1,2] ==>c
*/

/*
Sorted the array ==> [1,2,3,4]
Actually there is patter here, which is actually like this:
    * [1, 2]  => nums[0], nums[0 + 1]
    * [3, 4] => nums[length - 2], nums[length - 1]
    This is also can be used for second case right ?
    * [1, 2] => nums[0], nums[0 + 1]
    * [2, 5] => So on
    * [6, 6] => So forths
*/

const arrayPartition = (nums) => {
  nums.sort((a, b) => a - b);

  let tempArray = [];

  for (let idx = 0; idx < nums.length; idx += 2) {
    tempArray.push(Math.min(nums[idx], nums[idx + 1]));
  }

  return tempArray.reduce((acc, cur) => acc + cur, 0);
};

console.log(arrayPartition([6, 2, 6, 5, 1, 2]));
