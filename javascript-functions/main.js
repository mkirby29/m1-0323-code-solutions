function convertMinutesToSeconds(minutes) {
  const toSeconds = minutes * 60;
  return toSeconds;
}
console.log('value of 5 minutes in seconds: ', convertMinutesToSeconds(5));

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
console.log('value of function greet: ', greet('Matt'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log('value of area: ', getArea(19, 29));

function getFirstName(person) {
  return person.firstName;
}
console.log('The first name of the person is: ', getFirstName({ firstName: 'Matt', lastName: 'Kirby' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('The last element in the array is: ', getLastElement(['Matt', 'Rachel', 'Claire', 'Amelia']));
