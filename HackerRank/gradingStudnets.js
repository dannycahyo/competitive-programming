function gradingStudents(grades) {
  let finalGrades = [];
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[1] % 5);
    if (grades[i] < 38) {
      finalGrades.push(grades[i]);
    } else if (grades[i] % 5 < 3) {
      finalGrades.push(grades[i]);
    } else {
      finalGrades.push(grades[i] + (5 - (grades[i] % 5)));
    }
  }

  return finalGrades;
}
console.log(gradingStudents([73, 67, 38, 33]));
