/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return number % 2 === 0;
}

function startsWithJ(string) {
  return string.charAt(0) === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return pH + ' is neutral';
  } else if (pH >= 0 && pH < 7) {
    return pH + ' is acid';
  } else if (pH <= 14 && pH > 7) {
    return pH + ' is base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko' :
      return 'We\'re the warner brothers!';
    case 'wakko' :
      return 'We\'re the warner brothers!';
    case 'dot' :
      return 'I\'m cute~';
    default :
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action' :
      return 'John Wick';
    case 'comedy' :
      return 'Happy Gilmore';
    case 'horror' :
      return 'Halloween';
    case 'drama' :
      return 'The Notebook';
    case 'musical' :
      return 'Moulin Rouge';
    case 'sci-fi' :
      return 'Star Wars';
    default :
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
