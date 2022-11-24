/*
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
*/

/*
Store every number in the array into hash map & count the frequency  ==> { 1: 3, 2: 2, 3: 1  }
Looping through the hash map & check if the key consist value > 1
If it's exist ==> True
If it's not ===> False
*/

const uniqueNumberOfOccurence = (arr) => {
  const map = new Map();

  arr.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  });

  console.log(map);

  const occurrences = new Set(map.values());
  console.log(occurrences);

  return map.size === occurrences.size;
};

console.log(uniqueNumberOfOccurence([1, 2, 2, 1, 1, 3]));
