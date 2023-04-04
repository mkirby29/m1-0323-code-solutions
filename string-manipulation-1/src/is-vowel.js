/* exported isVowel */
function isVowel(char) {
  const vowel = char.toLowerCase();

  if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    return true;
  }
  return false;
}
