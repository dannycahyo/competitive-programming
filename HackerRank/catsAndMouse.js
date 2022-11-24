function catAndMouse(x, y, z) {
  const distanceCatA = Math.abs(x - z);
  const distanceCatbB = Math.abs(y - z);

  if (distanceCatA === distanceCatbB) {
    return "Mouse C";
  } else if (distanceCatA < distanceCatbB) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}

console.log(catAndMouse(2, 5, 4));
