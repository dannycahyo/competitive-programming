/*
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
*/

/*
Looping through the array to get the first value
Looping thorugh the array to get the second value
Making comparison between first value and the second value
Save the difference into variable ==> Keep udpated
Making condition if the value is equal to the varible that saves the difference
Push the first value and the second vallue into new array
*/

// const minimumAbsoluteDifference = (array) => {
//   let currentDifference = 0;
//   let finalArray = [];

//   for (let idx = 0; idx < array.length; idx++) {
//     const firstValue = array[idx];
//     for (let j = idx + 1; j < array.length; j++) {
//       const secondValue = array[j];

//       currentDifference = Math.abs(firstValue - secondValue);

//       if (currentDifference === currentDifference) {
//         finalArray[idx] = [firstValue, secondValue];
//       }
//     }
//   }

//   return finalArray;
// };

const minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let allDifArr = [];
  let listOfMinDifs = [];
  let leastDiff = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let wordDif = arr[i + 1] - arr[i];
    if (wordDif <= leastDiff) {
      listOfMinDifs[0] = arr[i];
      listOfMinDifs[1] = arr[i + 1];
      if (wordDif === leastDiff) {
        allDifArr.push([...listOfMinDifs]);
      } else {
        // allDifArr = [];
        allDifArr.push([...listOfMinDifs]);
      }

      leastDiff = wordDif;
    }
  }
  return allDifArr;
};

console.log(minimumAbsDifference([4, 2, 1, 3]));
