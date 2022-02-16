// Object is undefined --> WHY?

const obj = {
    a: 1, 
    b : {
        c: 2,
        d: {
            e: 5
        }
    }
}

// console.log(obj.b.f.e);

// Handling this

// if (obj.b && obj.b.f && obj.b.f.e) {
//     console.log(obj.b.f.e);
// } else {
//     console.log("Something is wrong");
// }


console.log(obj.b?.f?.e);

console.log(obj.b?.d?.e);
