/*
Input: seats = [3,1,5], students = [2,7,4]
Output: 4
Explanation: The students are moved as follows:
- The first student is moved from from position 2 to position 1 using 1 move.
- The second student is moved from from position 7 to position 5 using 2 moves.
- The third student is moved from from position 4 to position 3 using 1 move.
In total, 1 + 2 + 1 = 4 moves were used.

Input: seats = [4,1,5,9], students = [1,3,2,6]
Output: 7
Explanation: The students are moved as follows:
- The first student is not moved.
- The second student is moved from from position 3 to position 4 using 1 move.
- The third student is moved from from position 2 to position 5 using 3 moves.
- The fourth student is moved from from position 6 to position 9 using 3 moves.
In total, 0 + 1 + 3 + 3 = 7 moves were used.
*/

var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b); // [1,3,5]
  students.sort((a, b) => a - b); // [2,4,7]

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

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
