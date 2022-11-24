const startup = [
  { name: "Seo Dal Mi", saham: 60 },
  { name: "Nam Do San", saham: 15 },
  { name: "Injae", saham: 10 },
  { name: "Danny Gg", saham: 7 },
  { name: "Aka Gg", saham: 8 },
];

const arrayFindIndex = startup.findIndex((item) => {
  return item.name === "Injae";
});

console.log(arrayFindIndex);

// What kind of condition that you wanna return (boolean)
// Return a number karena berkaitan sama index
// Return index that match condition
