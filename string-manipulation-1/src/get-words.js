/* exported getWords */
function getWords(string) {
  let arr = [];

  if (string.length === 0) {
    return arr;
  } else {
    arr = string.split(' ');
  }
  return arr;
}
