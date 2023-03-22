const width = 19;
const height = 29;
const area = width * height;
console.log('value of area: ', area);
console.log('typeof area: ', typeof area);

const bill = 23;
const payment = 52;
const change = payment - bill;
console.log('value of change: ', change);
console.log('typeof change: ', typeof change);

const quizzes = 10;
const midterm = 80;
const final = 85;
const grade = (quizzes + midterm + final) / 3;
console.log('value of grade: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName = 'Matt';
const lastName = 'Kirby';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

const pH = 19;
let isAcidic;
if (pH < 7) {
  isAcidic = true;
} else {
  isAcidic = false;
}console.log('value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount = 9;
let isSparta;
if (headCount === 300) {
  isSparta = true;
} else {
  isSparta = false;
}console.log('value of isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

let motto = fullName;
motto = motto + ' is the GOAT';
console.log('value of motto: ', motto);
console.log('typeof motto: ', typeof motto);
