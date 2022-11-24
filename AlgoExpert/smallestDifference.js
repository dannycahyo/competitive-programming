/*
[-1, 5, 10, 20, 28, 3]  ==> [-1, 3, 5, 10, 20, 28]
[26, 134, 135, 15, 17] ==> [15, 17, 26, 134, 135]      

[28,26]

Writes a function that's gonna find a pairs that have absolute value closest to zero
*/

const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;

  let currentAbs = 0;
  let smallest = Infinity;
  let pairsArray = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idxTwo];

    const difference = Math.abs(firstNum - secondNum);

    //  [-1, 3, 5, 10, 20, 28]
    // [15, 17, 26, 134, 135]

    if (firstNum < secondNum) {
      currentAbs = difference;
      idxOne++;
    } else if (secondNum < firstNum) {
      currentAbs = difference;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > currentAbs) {
      smallest = currentAbs;
      pairsArray = [firstNum, secondNum];
    }
  }

  return pairsArray;
};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
