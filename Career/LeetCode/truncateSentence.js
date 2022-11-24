/*
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".

Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".
*/

var truncateSentence = function (s, k) {
  return s.split(" ", k).join(" ");
};

var truncateSentence2 = function (s, k) {
  let array1 = s.split(" ");
  array1.splice(k, array1.length - 1);
  return array1.join(" ");
};

console.log(truncateSentence2("Hello how are you Contestant", 2));
