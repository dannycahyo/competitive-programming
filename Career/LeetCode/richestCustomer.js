const maximumWealth = function (accounts) {
  let finalResult = 0;

  for (let i = 0; i < accounts.length; i++) {
    const value = accounts[i].reduce((acc, cur) => acc + cur, 0);
    finalResult = Math.max(finalResult, value);
  }

  return finalResult;
};

/*
- Initialize empty integer variable 
- Looping through the array
- Sum up the value
- Making condittion between the value
- Assign the richest one
- Return the variable
*/

var maximumWealth2 = function (accounts) {
  // intial sum
  let sum = 0;

  // loop through the main array
  for (let x = 0; x < accounts.length; x++) {
    // calculate the sum of each sub array at each iteration
    let currentSum = accounts[x].reduce((a, b) => a + b);

    // if "sum" variable is less than the sum of current subarray, swap them
    if (sum < currentSum) {
      sum = currentSum;
    }
  }

  return sum;
};

const result = maximumWealth2([
  [1, 5],
  [7, 3],
  [3, 5],
]);

console.log(result);
