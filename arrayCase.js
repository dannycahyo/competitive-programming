const sourceArray = [
  { data: "demo1", reference: "a" },
  { data: "demo2", reference: "b" },
  { data: "demo3", reference: "c" },
  { data: "demo4", reference: "d" },
  { data: "demo5", reference: "e" },
  { data: "demo6", reference: "f" },
];

const getResult = () => {
  const result = sourceArray.reduce(
    (accumulator, currentValue) => {
      return {
        ...accumulator,
        [currentValue.reference]: currentValue.data,
        all: accumulator.all + currentValue.reference,
      };
    },
    { all: "" }
  );
  return result;
};

console.log(getResult());

/**
result = {
  a: "demo1",
  b: "demo2",
  ...
  f: "demo6",
  all: "abcdef"
}
**/
