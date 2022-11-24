const startup = [
  { name: "Seo Dal Mi", saham: 60 },
  { name: "Nam Do San", saham: 15 },
  { name: "Injae", saham: 10 },
  { name: "Danny Gg", saham: 7 },
  { name: "Aka Gg", saham: 8 },
];

const saham = 100;
const arrayMap = startup.map((item) => {
  return { name: item.name, saham, originalSaham: item.saham };
});

// console.log(arrayMap);

// Membuat array baru dengan mengubah struktur datanya atau nilainya, transform and memetakan.

// Dengan menggunakan map maka kita akan memetakan dan memotong setiap eleemen array ke dalam sebuah function sendiri
// Sebagai tambahan, hasil dari potongan map tadi, bisa digunakan untuk lanjut pada method reduce
// Keyword Memetakan , Memotong
// Kalau Map menghasilkan sebuah array baru. sedangkan forEach tidak akan menghasilakn sebuah array Baru
//  Array sebelumnya pun masih ada

// Kali 2 untuk masing - masing elemen
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = angka.map((angkah) => {
  return angkah * 2;
});
// console.log(angka);
// console.log(newAngka);

// Memetakan semua elemen dalam array

// Latihan ArrayMap

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const companyName = companies.map((company) => company.name);

// console.log(companyName);

const companyPeriodTimes = companies.map((company) => {
  return { name: company.name, category: company.name, start: company.start };
});

// console.log(companyPeriodTimes);

const gabunganArray = [...arrayMap, ...companyPeriodTimes];

console.log(gabunganArray);

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap);
