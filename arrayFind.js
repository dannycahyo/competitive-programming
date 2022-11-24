const startup = [
  { name: "Seo Dal Mi", saham: 60 },
  { name: "Nam Do San", saham: 60 },
  { name: "Injae", saham: 10 },
  { name: "Danny Gg", saham: 7 },
  { name: "Aka Gg", saham: 8 },
];

const arrayFind = startup.find((item) => {
  return item.saham === 60;
});

console.log(arrayFind);

// Return element that match condition
