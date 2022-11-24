const startup = [
  { name: "Seo Dal Mi", saham: 60 },
  { name: "Nam Do San", saham: 15 },
  { name: "Injae", saham: 10 },
  { name: "Danny Gg", saham: 7 },
  { name: "Aka Gg", saham: 8 },
];

const totalSaham = startup.reduce((accumulator, current) => {
  return accumulator + current.saham;
}, 20);

console.log(totalSaham);

// Menggabungkan Array menjadi satu nilai dalam bentuk data apapun (blek)

// Digunakan untuk melakukan sesuatu terhadap seluruh elemen pada sebuah array

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Accumulator adalah hasil penjumlahanya, sedangkan current value ialah value dari masing2 elemen

const newAngka = angka.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);

console.log(newAngka);

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

const totalYears = companies.reduce(
  (total, company) => total - (company.start - company.end),
  20
);

console.log(totalYears);

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age);

console.log(combined);
