const startup = [
  { name: "Seo Dal Mi", saham: 60 },
  { name: "Nam Do San", saham: 15 },
  { name: "Injae", saham: 10 },
  { name: "Danny Gg", saham: 7 },
  { name: "Aka Gg", saham: 8 },
];

const arrayFilter = startup.filter((item) => {
  return item.name !== "Seo Dal Mi" && item.name !== "Nam Do San";
});

// console.log(arrayFilter);

// Return an array that match with condition

// Merupakan Salah Satu Higher Order Function
// Memfilter berdasarkan kondisi yang ditentukan dan menghasilkan sebuah array baru

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Wea're looking for angka >= 3
// Kalau pakai looping (for)

const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

// console.log(newAngka);

const filterAngka = angka.filter((angkah) => {
  return angkah >= 3;
});

// console.log(filterAngka);

// Latihan Filter

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

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

// console.log(retailCompanies);

let canDrink1 = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink1.push(ages[i]);
  }
}

// console.log(canDrink1);

const canDrink2 = ages.filter((age) => age >= 21);

// console.log(canDrink2);

const eightiesCompany = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompany);
