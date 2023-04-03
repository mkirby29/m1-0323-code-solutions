/* exported includesSeven */
function includesSeven(array) {
  let bool = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 7) {
      bool = false;
    } else {
      bool = true;
    }
  }
  return bool;
}
