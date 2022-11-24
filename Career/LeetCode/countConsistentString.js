var countConsistentStrings = function (allowed, words) {
  let set = new Set(allowed);
  console.log(set);

  let count = 0;
  for (const character of words) {
    console.log(character.split("").every((s) => set.has(s)));
    if (character.split("").every((s) => set.has(s))) {
      count++;
    }
  }
  return count;
};

const result = countConsistentStrings("abc", [
  "a",
  "b",
  "c",
  "ab",
  "ac",
  "bc",
  "abc",
]);

console.log(result);

// console.log(everryArray);
