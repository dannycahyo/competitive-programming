var arrayStringsAreEqual = function (word1, word2) {
  const firstArray = word1.reduce((acc, cur) => acc + cur, "");
  const secondArray = word2.reduce((acc, cur) => acc + cur, "");

  if (firstArray === secondArray) {
    return true;
  } else {
    return false;
  }
};

const arrayStringsAreEqual2 = (word1, word2) => {
  return word1.join("") === word2.join("");
};

const arrayStringsAreEqual3 = (word1, word2) => {
  const firstArray = word1.reduce((acc, cur) => acc + cur, "");
  const secondArray = word2.reduce((acc, cur) => acc + cur, "");

  return firstArray === secondArray;
};

const result = arrayStringsAreEqual2(["a", "cb"], ["ac", "b"]);

console.log(result);

/*
- Spread both array
- Making conditon 
*/
