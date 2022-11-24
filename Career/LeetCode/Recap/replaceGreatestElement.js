/*
Input: arr = c
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
*/

/*
Two nested loop 
If i !== j ==> Math.max [...j]
Then push it
*/

// const replaceGreatestElement = (arr) => {
//   let finalArray = [];

//   for (let idx = 0; idx < arr.length; idx++) {
//     for (let jdx = 0; jdx < arr.length; jdx++) {
//       if (idx !== jdx) {
//         finalArray[idx] = Math.max(...arr[jdx]);
//       }
//     }
//   }

//   return finalArray;
// };

var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else if (i !== arr.length) {
      arr[i] = Math.max(...arr.slice(i + 1));
    }
  }
  return arr;
};

var replaceElements2 = function (arr) {
  let result = new Array(arr.length);
  result[result.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    result[i] = Math.max(arr[i + 1], result[i + 1]);
  }

  return result;
};

const replaceElements3 = (arr) => {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(max, temp);
  }
  return arr;
};

console.log(replaceElements3([17, 18, 5, 4, 6, 1]));
