const num1 = 29;
const num2 = 9;
const num3 = 19;

const maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue: ', maximumValue);

const heroes = ['Superman', 'Spiderman', 'Hulk', 'Wonder Woman'];
let randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

const library = [
  {
    title: '438 Days',
    author: 'Jonathan Franklin'
  },
  {
    title: 'Lamb',
    author: 'Christopher Moore'
  },
  {
    title: 'Hop on Pop',
    author: 'Dr. Seuss'
  }
];

const lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

const firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);

const fullName = 'Matt Kirby';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
