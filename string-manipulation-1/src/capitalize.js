/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();

  return firstLetter + restOfWord;
}
