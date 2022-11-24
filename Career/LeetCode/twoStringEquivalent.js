/*
Input: word1 = ["ab", "c"], word2 = ["ab", "c"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
*/

/*
Looping through the array 
Making condition if the sum up are equivalent
If it's true, return true
If it's not, return false
*/

const twoStringEquivalent = (word1, word2) => {
  let firstString = "";
  let secondString = "";

  // for (let string1 of word1) {
  //   firstString += string1;
  // }
  const first = word1.reduce((acc, cur) => acc + cur, "");

  // for (let string2 of word2) {
  //   secondString += string2;
  // }

  const second = word2.reduce((acc, cur) => acc + cur, "");

  return first === second;
};

const result = twoStringEquivalent(["abc", "d", "defg"], ["abcddefg"]);

console.log(result);
