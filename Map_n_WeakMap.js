const map = new Map();

map.set("Aniruddha", {
    name: "Aniruddha",
    age:38,
    gender: 'Male',
});

map.set("Shruti", {
    name:"Shruti",
    age: 30,
    gender: 'Female',
});

map.set("Ankush", {
    name: "Ankush",
    age:5,
    gender: "Male",
});

map.set("Dummy", {
    name: "Ankush",
    age:5,
    gender: "Male",
});


console.log(map);

console.log(map.get("Shruti"));

console.log(map.has("Dummy"));

console.log(map.delete("Dummy"));

console.log(map);


for (const [k, v] of map) {
    console.log(k);
    console.log(v);
};


for (const [k,v ] of map) {
    console.log(k, v);
}

const prev = map.get("Aniruddha");

map.set("Aniruddha", {...prev, age:39});

console.log(map);

map.set("Dummy", {
    name: "Ankush",
    age:5,
    gender: "Male",
});

const prev2 = map.get("Dummy");

map.set("Dummy", {...prev2, age: prev2.age+10});

console.log(map.get("Dummy"));

// WeakMap

const weakMap = new WeakMap();

// The KEY should always be an Object
const abc = {a:1}
const pqr = {p:1}

weakMap.set(abc, 1);
weakMap.set(pqr, 2);

console.log(weakMap.get(abc));
console.log(weakMap.get(pqr));

console.log(weakMap.has(abc));
console.log(weakMap.delete(abc));
console.log(weakMap.has(abc));
