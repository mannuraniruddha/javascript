const users = [
    {id: 1, name:"Aniruddha", gender: "M", age: 38},
    {id:2, name:"Shruti", gender:"F", age: 30},
    {id:3, name:"Ankush", gender: "M", age: 05},
    {id:4, name:"Shakti", gender:"F", age:25},
]

const updatedUsers = users.map(x => {
    if (x.gender === 'M'){
        return {...x, name:"Mr. "+x.name, profession:"Cricketer"}
    }
    else{
        return {...x, name:"Ms. "+x.name, profession:"Actress"}
    }
})

console.log(updatedUsers);



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = arr.reduce((prev, curr) => prev + curr, 0)

console.log(sum);

// Useing Filter
const maleFilter = users.filter(user => user.gender === "M");
console.log(maleFilter);

// Using Reduce
const maleUsers = users.reduce((prev, curv) => {
    if (curv.gender === "M") {
        return [...prev, curv];
    }
    return prev;
}, [] )

console.log(maleUsers);

// Replace Find with Reduce
const findAnkush = users.reduce((prev, curv) => {
    if (curv.name === "Ankush"){
        return [...prev, curv];
    }
    return prev;
}, []);

console.log(findAnkush);

// OR 

const findAnkush1 = users.reduce((prev, curv) => {
    if (curv.name === "Ankush"){
        return curv;
    }
    return prev;
}, undefined);

console.log(findAnkush1);

// Group by Gender
// By Mutable method
// (male) M : []
// (female) F : []


const groupByGender = users.reduce((prev, curv ) => {

    if (prev[curv.gender] === undefined){
        prev[curv.gender] = []
    }
    prev[curv.gender].push(curv)

    return prev;
}, {});

console.log(groupByGender);


// By Immutable method
// (male) M : []
// (female) F : []

const groupByGender2 = users.reduce((prev, curv) => {
    if (prev[curv.gender] === undefined) {
        prev[curv.gender] = [];
    }
    
    return {...prev, [curv.gender]:[
        ...prev[curv.gender], curv
    ]}
}, {});

console.log(groupByGender2);


// Another way to get the same result in One line

const a = 1;
const b = 2;
const c = a || b;
console.log(c);

// In JS, 0 is called False and
// also, it would be False if it is "undefined" or "null"

const aa = 0;
const bb = 2;
const cc = aa || bb;
console.log(cc);


// Hence, use the below syntax

const ccc = aa ?? bb; // Nullish operator
console.log(ccc);

// Also, && checks for both conditions

const ddd = aa && bb;
// Zero is because, similar to "False", "undefined", "null"
console.log(ddd); 


const groupByGender3 = users.reduce((prev, curv ) => {

   //if (prev[curv.gender] === undefined){
   //    prev[curv.gender] = []
   //}

   //prev[curv.gender].push(curv)

    (prev[curv.gender] = prev[curv.gender] || []).push(curv)

    return prev;
}, {});

console.log("groupByGender3: \n", groupByGender3);

console.log(users);
const groupByAge = users.reduce((prev, curv) => {
    console.log(prev);
    console.log(curv.name);
    console.log(curv.age/10);
    max_range = (curv.age/10)*10
    min_range = (curv.age/10)
},{})