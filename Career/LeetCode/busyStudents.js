var busyStudent = function (startTime, endTime, queryTime) {
  let finalNumber = 0;

  for (let i = 0; i < startTime.length; i++) {
    const startValue = startTime[i];
    const endValue = endTime[i];

    // const difference = Math.abs(startValue - endValue);

    if (startValue <= queryTime && endValue >= queryTime) {
      finalNumber++;
    }
  }

  return finalNumber;
};

const startTime = [8, 4, 4];
const endTime = [7, 4, 5];

const result = busyStudent(startTime, endTime, 4);

console.log(result);

// console.log(Math.abs(3, 7));

/*
Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
*/

/*
- Initizize variable that contains number
- Looping through the array
- Get both value 
- Making codition
- Increment the variable
- Return the variable
*/
