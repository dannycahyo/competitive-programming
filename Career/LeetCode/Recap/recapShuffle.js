/*
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/

/*
Looping through the array
Make an new array based on the given condition
    - We take the original value of the array
    - For the next value, we can get from the index of original value + n
*/

const recapShuffle = (nums, n) => {
  let shuffleArray = [];

  for (let i = 0; i < n; i++) {
    shuffleArray.push(nums[i], nums[i + n]);
  }

  return shuffleArray;
};

const result = recapShuffle([1, 1, 2, 2], 2);

console.log(result);
