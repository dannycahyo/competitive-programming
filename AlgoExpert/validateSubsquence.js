/*
Input :
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10]

Output: True
*/

function isValidSubsequence(array, sequence) {
  let arrayPointer = 0;
  let sequencePointer = 0;

  while (arrayPointer < array.length && sequencePointer < sequence.length) {
    if (array[arrayPointer] === sequence[sequencePointer]) {
      sequencePointer++;
    }
    arrayPointer++;
  }

  console.log(sequencePointer);

  return sequencePointer === sequence.length;
}
/*
 - 5 === 1 ? No It's not. So we move the array pointer & now become 1
 - 1 ==== 1 ? Yes It is. So we increment the sequence pointer become 1
 - 1 === 6 ? No It's not. So we move the array pointer & now become 2
 - 22 === 6 ? No It's not. So we move the array pointer & now become 3
 - 25 === 6 ? No It's not. So we move the array pointer & now become 4
 - 6 === 6 ? Yes It is. So we increment the sequence pointer become 2
SO ON & SO FORTHS
*/

function isValidSubsequence2(array, sequence) {
  let sequencePointer = 0;
  for (const value of array) {
    if (sequencePointer === sequence.length) break;
    if (sequence[sequencePointer] === value) sequencePointer++;
  }

  return sequencePointer === sequence.length;
}

console.log(isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
