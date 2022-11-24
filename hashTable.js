const singleNumber = function (nums) {
  let result;
  const numsMap = new Map();
  console.log("This is the Hash Table", numsMap);

  for (let num of nums) {
    console.log("This is the value", num);
    if (numsMap.has(num)) {
      numsMap.set(num, numsMap.get(num) + 1);
    } else {
      numsMap.set(num, 1);
    }
  }

  numsMap.forEach((value, key) => {
    // console.log("Look this is the key", key);
    console.log("This one is the value", value);
    if (value === 1) {
      result = key;
    }
  });

  return result;
};

const array = [4, 1, 2, 1, 2];

const finalResult = singleNumber(array);

console.log(finalResult);
