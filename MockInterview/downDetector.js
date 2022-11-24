/*
- Status[i] adalah status website di menit ke i, 1 jika website bisa diakses, 0 jika tidak bisa diakses

- 5 menit ==> Telpon
- Setelah 5 menit masih tidak bisa => Ga akan telpon
- Status 1 => Bisa diakses
- Status 0 => Gabisa

Input:
[
   3,
10 1 0 1 1 0 0 0 0 0 1 ==> Telpon 1 kali
10 0 0 0 0 0 0 0 0 0 0 ==> Telpon 1 kali
11 0 0 0 0 0 1 0 0 0 0 0 => Telpon 2 kali
]

[1,1,2]
Output => String  (Single Integer (Jumlah berapa kali Doby ditelpon))


Asumsi:
0 berturut - turut sampe 5 => Telpon 1 kali
0 berturut - turt lebih dari 5 => Telpon 1 kali juga
*/

/*
Two nested loop into the arrayOfNum
Iterasi 1 =>  10 1 0 1 1 0 0 0 0 0 1 
Iterasi 2 => 10 0 0 0 0 0 0 0 0 0 0 
Iterasi 3 => 11 0 0 0 0 0 1 0 0 0 0 0
Pada setiap iterasi nya: 
    * Variable untuk menentukan jumlah ditelpon nya
    * Variable untuk menyimpan jumlah 0 yg keluar berturut - turut => 10
Buat kondisi
    * Variable yang menyimpan jumlah nya udah 5 ==> jumlah ditelpon 1
    * Variable yang menyimpan jumlah nya setelah 5 muncul 0 lagi => jumlah ditelpon 1
*/

let caseNumber = 1;

const downDetector = (line) => {
  const arrayOfNum = line.split(" ").map((item) => parseInt(item));

  if (arrayOfNum.length === 1) return;

  let saveTheNumberGetTelphoned = [];
  let totalTelphoned = 0;
  let consistenBreak = 0;
  for (let i = 1; i < arrayOfNum.length; i++) {
    const num = arrayOfNum[i];
    if (num === 0) {
      consistenBreak++;
    } else if (num === 1) {
      if (consistenBreak >= 5) {
        totalTelphoned += 1;
      }
      consistenBreak = 0;
    }
  }

  if (consistenBreak >= 5) {
    totalTelphoned += 1;
  }

  saveTheNumberGetTelphoned.push(totalTelphoned);

  saveTheNumberGetTelphoned.forEach((result, index) => {
    console.log(`Case #${caseNumber}: ${result}`);
  });

  caseNumber += 1;
};

// const input = [
//   [3],
//   [10, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
//   [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [11, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// ];

const input = "11 0 0 0 0 0 1 0 0 0 0 0";

// console.log(input.split(" ").map((item) => parseInt(item)));

console.log(downDetector(input));
