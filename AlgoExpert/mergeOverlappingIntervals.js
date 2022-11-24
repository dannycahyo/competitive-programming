/*
Input : 
[
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10]
]

Output:
[[1,2], [3,8], [9,10]]
*/

/*
Traverse into the array
Destructure the array to get the value  (currentMinValue & currentMaxValue)
Making condition 
if the CurrentMaxValue < nextMinValue
  * We gonna push the value
if the currentMaxValue > next value (currentMinValue)
  * We gonna push the currentMinValue and the next max Value
*/

const mergeOverlappingIntervalsFailed = (array) => {
  const finalArray = [];

  for (let i = 0; i < array.length; i++) {
    const [currentMinVal, currentMaxVal] = array[i];
    const [nextMinVal, nextMaxVal] = array[i + 1];
    if (currentMaxVal < nextMinVal) {
      finalArray.push([currentMinVal, currentMaxVal]);
    } else if (currentMaxVal > nextMinVal) {
      finalArray.push([currentMinVal, nextMaxVal]);
    }
  }

  return finalArray;
};

const mergeOverlappingIntervals = (array) => {
  const sortedIntervals = array.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currenyInterval = sortedIntervals[0];
  mergedIntervals.push(currenyInterval);

  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currenyInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currenyInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currenyInterval = nextInterval;
      mergedIntervals.push(currenyInterval);
    }
  }

  return mergedIntervals;
};

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
);
