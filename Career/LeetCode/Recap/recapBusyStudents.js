/*
Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
*/

/*
Looping through the array
Make sure untuk cek setiap element atau number 
Making condition for checking the students
    * start time & endtime < queryTime => count the outuput
*/

const countBusyStudents = (startTime, endTime, queryTime) => {
  let countStudent = 0;

  for (let i = 0; i < startTime.length; i++) {
    const startValue = startTime[i];
    const endValue = endTime[i];

    if (startValue <= queryTime && endValue >= queryTime) {
      countStudent++;
    }
  }

  return countStudent;
};

const startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10];

const result = countBusyStudents(startTime, endTime, 5);

console.log(result);
