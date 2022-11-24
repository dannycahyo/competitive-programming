const sumUniqueElement = (nums) => {
  let uniqueSum = 0;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[[i]];
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }

  for (const value of nums) {
    if (map.get(value) === 1) {
      uniqueSum += value;
    }
  }

  return uniqueSum;
};

const result = sumUniqueElement([1, 5, 3, 4, 5]);

console.log(result);

/*
- Initialize variable 0
- Initiialize hash map
- Looping ke semua array nya
- Store every number on the array to the hash map
- Kalau semisal value (num) nya engga ada, maka kita akan set map nya dengan value + 1
- Kalau semisal value (num) nya udah ada maka, maka akan ditambahkan dengan value sebelumnya
- Looping ke hash map nya
- Accessing key nya yang punya value 1 aja
- Sum up the value
*/

/*
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
*/
