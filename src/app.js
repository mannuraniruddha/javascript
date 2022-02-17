// instead of just writing statements,
// add export to them so that they can be imported in other files.
// console.log("How are you doing? from app.js");
export const greeting = 'How are you doing? from app.js';

export const goodbye = 'Goodbye from app.js';

export const welcome = goodbye ?? greeting;

// Exporting Default
// Please note : Per file, export only one default

const sum = (h, b) => (`${h} and ${b}`);

export default sum;
