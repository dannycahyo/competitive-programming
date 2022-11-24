/*
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 

Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
Explanation:
All strings in arr are distinct, so the 1st string "aaa" is returned.

Input: arr = ["a","b","a"], k = 3
Output: ""
Explanation:
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
*/

/*
Mapping all of the string in the array & count the frequency  ==> { "d": 1, "b": 2 } So on & So forths
Filter array nya berdasarkan string dari hash map yang count by one ==> [ "d", "a" ]
Get the string in the array with the index of k - 1  ==> ["d", "a"]
*/

const distinctStringInAnArray = (arr, k) => {
  let finalString = "";
  const map = new Map();

  for (const string of arr) {
    if (!map.has(string)) {
      map.set(string, 1);
    } else {
      map.set(string, map.get(string) + 1);
    }
  }

  let distinctArray = [];

  for (const [key, value] of map) {
    if (value === 1) {
      distinctArray.push(key);
    }
  }

  finalString = distinctArray[k - 1];

  if (finalString === undefined) return "";
  return finalString;
};

console.log(distinctStringInAnArray(["d", "b", "c", "b", "c", "a"], 2));
