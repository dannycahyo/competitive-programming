/*
Input: strs = ["zyx","wvu","tsr"]
Output: 3
Explanation: The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.
*/

const deleteColumnToMakeSorted = (strs) => {
  const tempArray = strs.map((string) => string.split("").sort().join(""));

  let countColumnToBeDeleted = 0;

  for (let idx = 0; idx < strs.length; idx++) {
    const string = strs[idx];
    const stringToCompare = tempArray[idx];

    if (string !== stringToCompare) {
      countColumnToBeDeleted += 1;
    }
  }

  return countColumnToBeDeleted;
};

console.log(deleteColumnToMakeSorted(["zyx", "wvu", "tsr"]));
