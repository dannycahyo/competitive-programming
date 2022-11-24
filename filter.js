const internasional = [
  {
    name: "Indonesia",
    label: "Indonesia",
    code: "IDN",
    currency: "IDR",
    cellPrefix: "+62",
  },
  {
    name: "Malaysia",
    label: "Malaysia",
    code: "MYS",
    currency: "MYR",
    cellPrefix: "+60",
  },
  {
    name: "Bangladesh",
    label: "Bangladesh",
    code: "BGD",
    currency: "BDT",
    cellPrefix: "+880",
  },
  {
    name: "Myanmar",
    label: "Myanmar",
    code: "MMR",
    currency: "MMK",
    cellPrefix: "+95",
  },
  {
    name: "Nepal",
    label: "Nepal",
    code: "NPL",
    currency: "NPR",
    cellPrefix: "+977",
  },
  {
    name: "Philippines",
    label: "Philippines",
    code: "PHL",
    currency: "PHP",
    cellPrefix: "+63",
  },
  {
    name: "Vietnam",
    label: "Vietnam",
    code: "VNM",
    currency: "VND",
    cellPrefix: "+84",
  },
];

const result = internasional.filter((item) => item.code === "VNM");
console.log(result);
