/* exported findIndex */
function findIndex(array, value) {
  const num = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return num;
}
