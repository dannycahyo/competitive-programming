/*
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
*/

/*
Two nested loop 
The first looop ==> Pointer index ke I (index ==> 0)
The second loop ===> Pointer index ke J (index ==> i + 1)
*/

const handleNumberOfGoodPairs = (array) => {
  let count = 0;

  for (let idx = 0; idx < array.length; idx++) {
    const firstValue = array[idx];
    for (let jdx = idx + 1; jdx < array.length; jdx++) {
      const secondValue = array[jdx];

      if (firstValue === secondValue) {
        count++;
      }
    }
  }

  return count;
};

var numIdenticalPairs = function (nums) {
  let sum = 0;
  let map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      sum += 2 + (map.get(num) - 1);
      map.set(num, map.get(num) + 1);
      map.set("pairs", sum);
    } else map.set(num, 0);
    // { 1: 1, 2: 0, 3: 0 }
  });

  console.log(map);

  if (map.has("pairs")) return map.get("pairs");
  return 0;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// sum = 1
// 1 + 2
// 1 ==> 2
// sum = 3
// 3 + 2  -1 => 4
// 3 ==> 1
// 4
