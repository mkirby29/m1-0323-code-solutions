/* exported filterOutNulls */
function filterOutNulls(values) {
  const arr = [];

  for (let i = 0; i <= values.length; i++) {
    if (values[i] === null) {
      i++;
    } else {
      arr.push(values[i]);
    }
  }
  return arr;
}