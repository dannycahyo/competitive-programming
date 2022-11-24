const array = [
  {
    id: "djdhd",
    createdAt: "shskhs",
    status: "shjskhs",
    userTeamId: [{ name: "skshs", roles: "sjhsjs", email: "skshksh" }],
  },
  {
    id: "djdhd",
    createdAt: "shskhs",
    status: "shjskhs",
    userTeamId: [{ name: "skshs", roles: "sjhsjs", email: "skshksh" }],
  },
];

const result = array.map((item) => {
  const userData = item.userTeamId.reduce((acc, cur) => {
    return {
      ...acc,
      email: cur.email,
      roles: cur.roles,
      name: cur.name,
    };
  });

  return {
    id: item.id,
    createdAt: item.createdAt,
    status: item.status,
    email: userData.email,
    name: userData.name,
    roles: userData.roles,
  };
});

console.log(result);
