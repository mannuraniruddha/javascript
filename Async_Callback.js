// JavaScript is a 
// 1. Single Threaded
// 2. Synchronous
// Programming Language

// JS is using the V8 engine developed by Google
// Three ways of performing Async in JS

// 1. Callback 
// 2. Promises
// 3. Generators

// 1. Callback
// console.log("S1");
// setTimeout(() => {
//     console.log("AS1");
// }, 100);

// console.log("S2");
// setTimeout(() => {
//     console.log("AS2");
// }, 10);

// console.log("S3");
// console.log("S4");


// console.log("S1");
// setTimeout(() => {
//     console.log("AS1");
// }, 100);

// console.log("S2");
// setTimeout(() => {
//     console.log("AS2");
// }, 100);

// console.log("S3");
// console.log("S4");

console.log("S1");
setTimeout(() => {
    console.log("AS1");
}, 10);

console.log("S2");
setTimeout(() => {
    console.log("AS2");
}, 100);

console.log("S3");
console.log("S4");
