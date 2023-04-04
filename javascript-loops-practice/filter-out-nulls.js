/* exported filterOutNulls */
function filterOutNulls(values) {
  const arr = [];

  for (let i = 0; i <= values.length; i++) {
    const val = values[i];
    if (values[i] != null) {
      arr.push(val);
    }
  }
  return arr;
}
