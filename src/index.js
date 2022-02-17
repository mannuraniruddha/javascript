// Old JS approach to import
// const app = require('./app');
// New approach is as mentioned below
// import * as app from './app'
// There is another approach
// This way you can only select few features from the other files/libraries
import ADD, { greeting as greet, welcome } from './app';
// import {goodbye} from './app'

// Please note, when importing "default" from any file, you can give any name
// Ex : from app.js, I'll import "sum", which is defined as default.
// I'll import it as ADD

// import ADD from './app';

// if we want to write both default and other features in on line
// then, import like below
// import ADD, {a, b} from './app'

console.log(ADD('hie', 'byee'));
console.log(welcome);
console.log(greet);
console.log('Hello World!!');
console.log('Howdy?');
