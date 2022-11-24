/*
Input: seats = [3,1,5], students = [2,7,4]
[1, 3 , 5]  [2, 4, 7]
Output: 4
Explanation: The students are moved as follows:
- The first student is moved from from position 2 to position 1 using 1 move.
- The second student is moved from from position 7 to position 5 using 2 moves.
- The third student is moved from from position 4 to position 3 using 1 move.
In total, 1 + 2 + 1 = 4 moves were used.

Input: seats = [2,2,6,6], students = [1,3,2,6]
[2,2,6,6]  [1, 2, 3 , 6]
1, 0, 3, 0
Output: 4
Explanation: Note that there are two seats at position 2 and two seats at position 6.
The students are moved as follows:
- The first student is moved from from position 1 to position 2 using 1 move.
- The second student is moved from from position 3 to position 6 using 3 moves.
- The third student is not moved.
- The fourth student is not moved.
In total, 1 + 3 + 0 + 0 = 4 moves were used.
*/

const minimumNumberOfPairs = (seats, students) => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  console.log(seats, students);

  let total = 0;

  for (let idx = 0; idx < seats.length; idx++) {
    const seat = seats[idx];
    const student = students[idx];
    const difference = Math.abs(seat - student);

    if (seat !== student) {
      total += difference;
    } else {
      total += 0;
    }
  }

  return total;
};

console.log(minimumNumberOfPairs([2, 2, 6, 6], [1, 3, 2, 6]));
