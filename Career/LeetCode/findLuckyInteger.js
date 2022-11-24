/*
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
*/

/*
Mapping every number of the array on hash map
Count every number according to its frequency
    For instance: { 2: 2, 3:1, 4: 1 }
Looping through the Hash Map
Making conditon if the key is equal to it's value, we're gonna count it
If there is no matching, we're going to return -1
*/

const findLuckyInteger = (arr) => {
  const map = new Map();

  let luckyNumber = -1;

  arr.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  });

  for (const key of map.keys()) {
    if (map.get(key) === key) {
      luckyNumber = Math.max(key, luckyNumber);
    }
  }

  return luckyNumber;
};

console.log(findLuckyInteger([1, 2, 2, 3, 3, 3]));
