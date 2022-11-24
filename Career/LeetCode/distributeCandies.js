/*
Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
*/

/*
Calculate how many candies that aliece can eat ==> 3
Making new Set for the array to indicate the number of candies that alice can eat
Making conditon if the number of candy types & can eat is equal ==> Return the number of candy eat or candy types
If the candy types > candy eay ==> Return candy eat
If the candy types < candy eat ==> Return candy type
*/

const distributeCandies = (candyType) => {
  const set = new Set();

  candyType.forEach((num) => {
    set.add(num);
  });

  const candyToBeEaten = candyType.length / 2;
  const candyTypeTotal = set.size;

  if (candyToBeEaten === candyTypeTotal) {
    return candyToBeEaten;
  } else if (candyTypeTotal > candyToBeEaten) {
    return candyToBeEaten;
  } else if (candyTypeTotal < candyToBeEaten) {
    return candyTypeTotal;
  }
};

const distributeCandies2 = function (candyType) {
  return Math.min(candyType.length / 2, new Set(candyType).size);
};

console.log(distributeCandies2([1, 1, 2, 2, 3, 3]));
