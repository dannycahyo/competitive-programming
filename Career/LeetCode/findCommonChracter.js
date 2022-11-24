/*
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
*/

/*
- First Looping is gonnna get every character of the array
- Second looping is gonna save every alphabet on the string
- Making condition for the alphabet that exist on every string 
*/

const findCommomCharacter = (arrayOfString) => {
  const result = [];
  const firstWordArr = [...arrayOfString[0]];
  // console.log(firstWordArr);

  for (const letter of firstWordArr) {
    // console.log(letter);
    // console.log(arrayOfString.every((word) => word));
    if (arrayOfString.every((word) => word.includes(letter))) {
      arrayOfString = arrayOfString.map((word) => word.replace(letter, ""));
      console.log(arrayOfString.map((word) => word.replace(letter, "")));
      console.log(letter);
      result.push(letter);
    }
  }

  // return result;
};

const result = findCommomCharacter(["cool", "lock", "cook"]);
console.log(result);
