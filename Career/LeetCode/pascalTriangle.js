/*
- Looping through the array
- Make sure for every iteration we control the index
- For each iteration we push an array 
- The first looping is gonna be our pointer
- The second looping is gonna be our operation
- 
*/

const pascalTriangle = (numRows) => {
  if (numRows == 0) return [[]];

  const res = [];
  for (let i = 0; i < numRows; i++) {
    //layer by layer
    //create inner array
    const inner = new Array(i + 1).fill(1);
    for (let j = 1; j < inner.length - 1; j++) {
      //skip first and last
      console.log(res[i - 1][j - 1]);
      inner[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(inner);
  }
  return res;
};

const result = pascalTriangle(5);

console.log(result);
