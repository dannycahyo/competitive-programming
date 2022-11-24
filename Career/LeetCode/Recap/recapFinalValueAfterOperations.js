/*
Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
*/

const finalValueAfterOperation = (array) => {
  let finalOperation = 0;

  const [plusOperation, otherPlusOperation] = ["++X", "X++"];

  for (const value of array) {
    if (value === plusOperation || value === otherPlusOperation) {
      finalOperation++;
    } else {
      finalOperation--;
    }
  }

  return finalOperation;
};

console.log(finalValueAfterOperation(["--X", "--X", "X--"]));
