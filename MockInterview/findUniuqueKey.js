/*
Diberikan sebuah object dengan value array of number. return key yang mempunyai value 2 dan panjang arraynya paling sedikit
 
input
 
{
	"a": [1,2,3,4]
	"b": [2,3,4]
	"c": [2]
	"d": [1,2]
}
 
output = "c"

Using Hash Map

- Traverse into the object
- Set the key of the hash map with the key as usual, and set the value of it by filtering the value that not equal to two
- After we get the new pairs
- Get the key that has the least length
- Return it.
*/

const findUniqueKey = (object, targetValue) => {
  let finalKey;
  const map = new Map();

  for (const key in object) {
    const value = object[key];
    map.set(
      key,
      value.filter((num) => num !== targetValue)
    );
  }

  let smallestLength = Infinity;
  for (const [key, array] of map) {
    smallestLength = Math.min(smallestLength, array.length);
    if (map.get(key).length === smallestLength) {
      finalKey = key;
    }
  }

  return finalKey;
};

const object = {
  a: [1, 2, 3, 4],
  b: [2, 3, 4],
  c: [2],
  d: [1, 2],
};

console.log(findUniqueKey(object, 2));
