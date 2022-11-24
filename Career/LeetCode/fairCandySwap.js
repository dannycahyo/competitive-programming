/*
Input: aliceSizes = [1,1], bobSizes = [2,2]
[1, 2] , [1, 2]
Output: [1,2]

Input: aliceSizes = [2], bobSizes = [1,3]
[3] [1,2]
Output: [2,3]

Input: aliceSizes = [1,2], bobSizes = [2,3]
Output: [1,2]

Input: aliceSizes = [1,2,5], bobSizes = [2,4]
[1, 2, 4] [2, 5]
Output: [5,4]
*/

/*
Traverse both array
Then push the value from first element & second element to both new array
Check if both array are the same
Return the number of first element & second

*/
// Not Passed All Of The Test Cases
const fairCandySwap = function (aliceSizes, bobSizes) {
  let aliceFinal = [];
  let bobFinal = [];

  for (let idx = 0; idx < aliceSizes.length; idx++) {
    const aliceValue = aliceSizes[idx];
    for (let jdx = idx + 1; jdx < aliceSizes.length; jdx++) {
      const bobValue = bobSizes[jdx];
      aliceFinal.push(aliceValue, bobValue);
      bobFinal.push(aliceSizes[idx + 1], bobSizes[jdx - 1]);

      const totalAlicePoint = aliceFinal.reduce((acc, cur) => acc + cur, 0);
      const totalBobSizesPoint = bobFinal.reduce((acc, cur) => acc + cur, 0);

      if (totalAlicePoint === totalBobSizesPoint) {
        return [aliceSizes[idx], bobSizes[jdx - 1]];
      }
    }
  }
};

// Using Hash Map
var fairCandySwap2 = function (A, B) {
  const sumA = A.reduce((acc, cur) => acc + cur);
  const sumB = B.reduce((acc, cur) => acc + cur);
  const diff = (sumA - sumB) / 2;
  console.log(diff);
  const setA = new Set(A);
  for (const candy of B) {
    if (setA.has(candy + diff)) return [candy + diff, candy];
  }
};

var fairCandySwap3 = function (A, B) {
  let aSum = 0;
  let bSum = 0;
  let m1 = new Map();
  let m2 = new Map();

  for (let num of A) {
    aSum += num;
    m1.set(num, m1.get(num) + 1 || 1);
  }

  for (let num of B) {
    bSum += num;
    m2.set(num, m2.get(num) + 1 || 1);
  }

  let average = (aSum + bSum) / 2;

  for (let num of A) {
    let diff = average - aSum;
    if (m2.has(num + diff)) return [num, num + diff];
  }

  /*
    average-aSum = 1 means aSum must increase by 1
    average-bSum = -1 means bSum must decrease by 1
    
    average-aSum = -1 means aSum must decrease by 1
    average-bSum = 1 means bSum must increase by 1
    */

  // Time Complexity: O(n)
  // Space Complexity: O(n)
};

const fairCandySwap4 = (A, B) => {
  let aliceArr = A;
  let bobArr = B;
  let aliceSize = 0;
  let bobSize = 0;
  let swap = [];

  for (let i = 0; i < aliceArr.length; i++) {
    aliceSize += aliceArr[i];
  }

  for (let i = 0; i < bobArr.length; i++) {
    bobSize += bobArr[i];
  }

  let difference = aliceSize - bobSize;

  for (let i = 0; i < aliceArr.length; i++) {
    for (let j = 0; j < bobArr.length; j++) {
      if (aliceArr[i] - bobArr[j] === difference / 2) {
        swap.push(aliceArr[i], bobArr[j]);
      }
    }
  }

  return swap;
};

console.log(fairCandySwap4([1, 2, 5], [2, 4]));
