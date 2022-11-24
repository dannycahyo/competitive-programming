var restoreString = function (s, indices) {
  let stringArray = s.split("");

  for (let i = 0; i < stringArray.length; i++) {
    // console.log(s[i]);
    stringArray[indices[i]] = s[i];
    /* stringArray[4] = s[0] ==> [c,o,d,e,c,e,e,t]
       stringArray[5] = s[1] ==> [c,o,d,e,c,o,e,t]
       stringArray[6] = s[2] ==> [c,o,d,e,c,o,d,t]
       stringArray[7] = s[3] ==> [c,o,d,e,c,o,d,e]
       So on and so forths
    */
  }
  // console.log(stringArray);

  return stringArray.join("");
};

var restoreString2 = function (s, indices) {
  let finalString = "";
  let map = new Map();

  for (let i = 0; i < indices.length; i++) {
    map.set(indices[i], s[i]);
  }
  console.log(map);

  for (let i = 0; i < indices.length; i++) {
    finalString += map.get(i);
  }
  return finalString;
};

const result = restoreString2("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

console.log(result);

/*
- Initialize empty string
- Sort the indices
- Making the string became piece of array
- Compare the index  of the array string with the array number
- Push the value into the variable 
*/
