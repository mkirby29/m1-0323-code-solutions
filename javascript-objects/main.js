const student = {
  firstName: 'Matt',
  lastName: 'Kirby',
  age: 43
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Web Developer';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

const vehicle = {
  make: 'Plymouth',
  model: 'Barracuda',
  year: 1970
};

vehicle['color'] = 'Midnight Blue';
vehicle['isConvertible'] = false;
console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Gidget',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
