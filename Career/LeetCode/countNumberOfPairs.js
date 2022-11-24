/*
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.
*/

/*
Do nested loop and count the pairs
- Looping pertama ==> first pointer & value
- Looping kedua ====> second pointer & value
- Making condition for every pairs and then count it
*/

const countNumberOfPairs = (array, k) => {
  let countPairs = 0;

  for (const value of array) {
    for (const valueToCompare of array) {
      if (Math.abs(value - valueToCompare === k)) countPairs++;
    }
  }

  return countPairs;
};

var countKDifference = function (nums, k) {
  // let map = {};
  const map = new Map();
  for (let i of nums) {
    // map[i] ? map[i]++ : (map[i] = 1);
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }

  console.log(map);

  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    // if (map[nums[i] - k]) {
    //   pairs += map[nums[i] - k];
    // }
    if (map.get(nums[i] - k)) {
      // console.log(map.get(nums[4] - 2));
      pairs += map.get(nums[i] - k);
    }
  }

  return pairs;
};

console.log(countKDifference([3, 2, 1, 5, 4], 2));
