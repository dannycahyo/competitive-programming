/*
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.

Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
*/

/*
- Make new sorted array
- Looping through the array
- Compare each iteration
- If it's not the same =>> We gonna count it
- Return the final
*/

const heightChecker = (heights) => {
  let countChecker = 0;

  const comparisonArray = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== comparisonArray[i]) {
      countChecker++;
    }
  }

  return countChecker;
};

const result = heightChecker([1, 1, 4, 2, 1, 3]);

console.log(result);
