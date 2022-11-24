// const angka = [1,2,3,4,5,6,7,8]
// // for(i = 0 ; i < angka.length ; i++) {
// //   console.log(angka[i])
// // }

const startup = [
  { name: "Seo Dal Mi", saham: 60 },
  { name: "Nam Do San", saham: 15 },
  { name: "Injae", saham: 10 },
  { name: "Danny Gg", saham: 7 },
  { name: "Aka Gg", saham: 8 },
];

for (let i = 0; i < startup.length; i++) {
  console.log(startup[i]);
}

const arrayForEach = startup.forEach((item) => {
  console.log(item);
  // return item.name;
});

// forEach tidak akan menghasilkan sebuah array baru
