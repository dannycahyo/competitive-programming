/*
Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
*/

/*
Intialize hash table
Looping through the array to count & save every number on the array
Push manually berdasarkan jumlah nya
*/

const sortByFrequency = (nums) => {
  let map = new Map();

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  console.log(map);

  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};

const result = sortByFrequency([2, 3, 1, 3, 2]);
console.log(result);
