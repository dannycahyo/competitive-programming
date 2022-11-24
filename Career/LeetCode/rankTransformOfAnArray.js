/*
Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]
*/

/*
Initialize new array for save the rank value
Copy the original array and make new sorted array ==> [10,20,30,40]
Looping through the array and push the rank
Looping through the array and change the value of the original array
*/

const rankTransformOfAnArray = (arr) => {
  let rankValue = [];
  let sortedArray = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    rankValue.push(i + 1);
  }

  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    map.set(arr[i], rankValue[i]);
  }
};

var arrayRankTransform = function (arr) {
  let map = {};
  [...new Set(arr)]
    .sort((a, b) => a - b)
    .map((val, idx) => {
      map[val] = idx + 1;
    });
  return [...arr.map((val) => map[val])];
};

var arrayRankTransform2 = function (arr) {
  const ranks = new Map(
    [...new Set(arr)].sort((a, b) => a - b).map((val, idx) => [val, idx + 1])
  );
  console.log(ranks);
  return arr.map((val) => ranks.get(val));
};

var arrayRankTransform3 = function (arr) {
  // map to store the rank of elements
  let m = new Map();
  // creating a sorted list with unique values
  let sorted = [...new Set([...arr].sort((a, b) => a - b))];

  for (let i = 0; i < sorted.length; i++) {
    // assigning ranks starting from 1. We removed duplicates because if we don't then same numbers will have different ranks
    m.set(sorted[i], i + 1);
  }
  // retrieving the assigned ranks from the map and replacing in the original input array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = m.get(arr[i]);
  }
  return arr;
};

console.log(arrayRankTransform2([40, 10, 20, 30]));
