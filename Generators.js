// Generators
// To create GENERATORS, just add "*" after the "FUNCTION" keyword.


function* thisIsATest() {
    try {
        yield 1;
        yield 2;
        yield 4;
        yield 3;
        return "Completed process"
    } catch (error) {
        console.log(error);
    }
}


const gen = thisIsATest();

console.log(gen.next());

// To stop execution of next "YIELD", just try one of the below methods.
// 1. gen.return()
// 2. gen.throw(new Error("..."))
//gen.return();
gen.throw(new Error("This is wrong"));
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


const gen2 = thisIsATest();

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

// Generator is an iterable object

const gen3 = thisIsATest();

for (const iterator of gen3) {
    console.log(iterator);
}
