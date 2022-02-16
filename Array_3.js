const xyz = {
    x : 1,
    y : 2,
    z : 3
}
console.log(xyz);

const abc = Object.assign({}, xyz, {a: 1, b:2, c:3})
console.log(abc);

const newObj = {...xyz, ...abc, d: 4, e:5, f:6}

console.log(newObj);

const newObj2 = {...newObj, h:10}

console.log(newObj2);

console.log(xyz);

// Destructuring

const x = 5
const {x:xx, y, z} = xyz
// In the above line 'xx' is an alias as the variable with 'x' is already defined.

console.log(x);
console.log(xx);
console.log(y);
console.log(z);
const key='y'

console.log(xyz);
const {x:aa, [key]:bb, z:cc} = xyz

console.log(aa);
console.log(bb);
console.log(cc);

console.log(xyz.x);
console.log(xyz['x']);
console.log(xyz[key]);
