/* exported findIndex */
function findIndex(array, value) {
  let x = 1;

  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      x = 1;
    } else {
      x = -1;
    }
  }
  return x;
}
