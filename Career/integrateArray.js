const careerDetail = [
  {
    _id: "615eaea5346704adce76d3f7",
    title: "Data Science",
    category: "Technology",
    image: "/careerImg/Data Scientist.png",
    criteria: [
      "Mampu dalam penggunaan software/pemrograman dasar",
      "Memiliki pengetahuan dalam bidang statistika",
      "Mampu memvisualisasikan dan mengkomunikasikan data",
      "Memiliki keterampilan data munging",
      "Memiliki keterampilan software engineering yang mumpuni",
    ],
    description:
      "Data science bertugas untuk mencari dan mengolah data yang dimiliki perusahaan.",
    skills: [
      "Data Science Introduction",
      "R",
      "Python",
      "SQL",
      "MATLAB",
      "AI",
      "Problem Solving",
      "Analysis",
      "Data Visualization",
      "Data Processing",
    ],
  },
];

const skillData = [
  {
    _id: "61601618f3604a9c622f38a1",
    title: "Analysis",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Business Dev.png",
  },
  {
    _id: "61601618f3604a9c622f38b4",
    title: "SQL",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38b6",
    title: "Python",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38b7",
    title: "Data Processing",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38b5",
    title: "Data Visualization",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38ea",
    title: "MATLAB",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38ec",
    title: "Problem Solving",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38e7",
    title: "Data Science Introduction",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
  {
    _id: "61601618f3604a9c622f38eb",
    title: "AI",
    Description: "Baba banana banana",
    Thumbnail: "/careerImg/Data Scientist.png",
  },
];

const integrateArray = [...careerDetail, ...skillData];

const finalArray = integrateArray
  .map((value) => ({
    params: { _id: "615eaea5346704adce76d3f7", skillName: value.title },
  }))
  .filter((value) => value.params.skillName !== "Data Science");

console.log(finalArray);

// const finalArray = integrateArray.map((value) => ({
//   params: { careerId: value.careerId, skillName: value.title },
// }));

// console.log(finalArray);
