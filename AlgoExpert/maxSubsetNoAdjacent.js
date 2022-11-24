/*
Input ==> [75, 105, 120, 75, 90, 135]

Output => 330 // 75 + 120 + 135

[4, 3, 5, 200, 5, 3]

11

- It has to be max sum
- And no adjacent

So how do I solve this medium problem?

* Looping thorugh the array, and on each iteration, increment it by 2
* Making condition if the current value is greater than the next value, so it should going to the next value
* Finally return it
*/

// const maxSubsetNoAdjacent = (array) => {
//   let finalSum = 0;
//   const newArray = array.slice();
//   console.log(newArray);

//   for (let i = 0; i < array.length; i += 2) {
//     const firstValue = array[i];
//     for (let j = i + 2; j < array.length; j += 2) {
//       const secondValue = array[j];

//       if (firstValue === secondValue) continue;

//       if (firstValue < secondValue) {
//         finalSum += array[j + 1];
//       } else {
//         finalSum += array[i];
//       }
//     }
//   }

//   return finalSum;
// };

const maxSubsetNoAdjacent = (array) => {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  const maxSums = array.slice();

  maxSums[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    /*
        1. 120 = Math.max(105, 75 + 120) ==>   maxSums = [ 75, 105, 195, 75, 90, 135 ]
        2. 75 = Math.max(195, 105 + 75) ==>   maxSums = [ 75, 105, 195, 195, 90, 135 ]
        3. 90 = Math.max(195, 195 + 90) ==>   maxSums = [ 75, 105, 195, 195, 285, 135 ]
        4. 135 = Math.max(285, 195 + 135) ==> maxSums = [ 75, 105, 195, 195, 285, 330 ]
    */
  }

  return maxSums[maxSums.length - 1];
};

const maxSubsetNoAdjacent2 = (array) => {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const currentSum = Math.max(first, second + array[i]);
    second = first;
    first = currentSum;
    /*
    1. currentSum = Max(105, 75 + 120)
    75 = 120
    first = 195
    2. 195 = Max(195, 120 +  75)
    120 = 195
    195 = 195
    3. 195 = Max(195, 195 + 90)
    195 = 195
    195 = 285
    4. 285 = Max(285, 195 + 135)
    195 = 285
    285 = 330
    */
  }

  return first;
};

console.log(maxSubsetNoAdjacent2([75, 105, 120, 75, 90, 135]));
