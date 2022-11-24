var kidsWithCandies = function (candies, extraCandies) {
  let maxCandy = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandy);
};

const result = kidsWithCandies2([2, 3, 5, 1, 3], 3);
console.log(result);

/*
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
*/

var kidsWithCandies2 = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((value) => {
    if (value + extraCandies < max) {
      return false;
    }
    return true;
  });
};

/*
Pseudo Code
    - Initialize empty array
    - Find the greates number of the array
    - Looping through the array
    - Making comparion
    - Push the boolean to the array
    - Return the array
*/
