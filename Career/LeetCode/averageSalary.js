/*
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000)/1= 2000

*/

/*
- Find the minimum salary on the array
- Find the maximyum salary on the array
- Filter the array based on the minimum & maximum one
- Sum up all of the value 
- Divide based on the length of the array
*/

const averageSalaryExcludingMinMax = (array) => {
  const smallestSalary = Math.min(...array);
  const biggestSalary = Math.max(...array);

  const fixArray = array.filter(
    (num) => num !== smallestSalary && num !== biggestSalary
  );

  const totalSalary = fixArray.reduce((acc, cur) => acc + cur, 0);

  const averageSalary = totalSalary / fixArray.length;
  return averageSalary;
};

console.log(averageSalaryExcludingMinMax([8000, 9000, 2000, 3000, 6000, 1000]));
