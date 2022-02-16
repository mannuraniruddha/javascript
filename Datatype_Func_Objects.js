const fullName = 'Aniruddha'
console.log(fullName);

const bool = true
console.log(typeof bool);
console.log(typeof `${bool}`);

console.log(bool);

function add(a, b){
    return a+b;
}

console.log(add(1,2));

// console.log(constant_func(1,2)); Cannot access 'constant_func' before initialization 

const constant_func = function(a, b){
    return a+b;
}

console.log(constant_func(1,2));

// New ways to define functions

const abc = (a, b, c ) => {return a + b + c;}

console.log(abc(1,2,3));

// OR other way of writing the same if there is only one input 

const greet = name => `Hello ${name}`

console.log(greet('Shruti'));

// Objects

const obj_new = {
    firstName: 'Aniruddha',
    lastName : 'Mannur',
    age: 30,
    fullName: function(){ return `${this.firstName} ${this.lastName}`}
}

console.log(obj_new.fullName());

const obj_modern = {
    firstName: 'Aniruddha',
    lastName : 'Mannur',
    age: 30,
    degree: ['BE', 'PG'],
    // fullName : [lambda: fullName()]
    fullName() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(obj_modern.fullName());

