/*
    - First input ==> "anjing"
    - Second input ==> "jingan"
Make a function that's going to check & return, wether or not both input is anagram.
*/

/*
Pseudo Code
    - Transform both array become array of string
     * ["a", "n", "j", "i", "n", "g"]
     * ["j", "i", "n", "g", "a", "n"]
    - Store every alphabet of the array into hash tables
     *  { "a": 1 } ==> For the first array
     * { "a": 1 } ==> For the second array
    So on and so forth
    - Compare each key of the alphabet & the value
    - If all of it the same, just return true
    - Otherwise return false
*/

const checkAnagram = (string1, string2) => {
  // Sorted the first string ==> anjing transform into agijnn
  const firstChracters = string1.split("");
  const sorted = firstChracters.sort().join("");
  console.log(sorted);

  // Sorted the second string ===> jingan transform into agijnn
  const secondChracters = string2.split("");
  const sorted2 = secondChracters.sort().join("");
  console.log(sorted2);

  // Checking the size of both array & validate both string
  if (firstChracters.length !== secondChracters.length) {
    return false;
  } else if (sorted === sorted2) {
    return true;
  } else {
    return false;
  }
};

const checkAnagram2 = (s, t) => {
  const firstChracters = s.split("");
  const secondChracters = t.split("");

  const map = new Map();
  const secondMap = new Map();

  for (const character of firstChracters) {
    if (!map.has(character)) {
      map.set(character, 1);
    } else {
      map.set(character, map.get(character) + 1);
    }
  }

  for (const character of secondChracters) {
    if (!secondMap.has(character)) {
      secondMap.set(character, 1);
    } else {
      secondMap.set(character, secondMap.get(character) + 1);
    }
  }

  console.log(map);
  console.log(secondMap);
};

console.log(checkAnagram2("anjing", "jingan"));
