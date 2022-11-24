/*
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
*/

/*
Loopin through the array
Sum up the value of each iteration
Find the maximal one
*/

const richestCustomer = (nums) => {
  let finalArray = [];
  let finalNum = 0;

  for (const value of nums) {
    finalArray.push(value.reduce((acc, cur) => acc + cur, 0));

    finalNum = Math.max(...finalArray);
  }

  return finalNum;
};

const result = richestCustomer([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
console.log(result);
