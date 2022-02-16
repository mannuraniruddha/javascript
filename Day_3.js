const users = [
    {id:1, name:"Aniruddha", gender: "M", age: 38},
    {id:2, name:"Shruti", gender:"F", age: 30},
    {id:3, name:"Ankush", gender: "M", age: 05},
    {id:4, name:"Shakti", gender:"F", age:25},
    {id:5, name:"Shrinivas", gender:"M", age:65}
]

const groupByAge = users.reduce((prev, curv) => {

    // const ageGroup = Math.floor(curv.age/10)+"0 : "+Math.floor(curv.age/10)+"9";
    // OR
    const ageGroup2 = Math.floor(curv.age/10);
    const key = `${ageGroup2}0-${ageGroup2}9`;
    // console.log(key);
    (prev[key] = prev[key] || []).push(curv);
    return prev;
}, {})

console.log(groupByAge);

const groupByAgeSortByName = users.reduce((prev, curv) => {

    // const ageGroup = Math.floor(curv.age/10)+"0 : "+Math.floor(curv.age/10)+"9";
    // OR
    const ageGroup2 = Math.floor(curv.age/10);
    const key = `${ageGroup2}0-${ageGroup2}9`;
    // console.log(key);
    (prev[key] = prev[key] || []).push(curv);
    return prev;
}, {})

console.log(groupByAgeSortByName);


const arr = [...Array(1000).keys()];

const is25Exists = arr.some(x => x === 25);

console.log(is25Exists);

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(2);

console.log(set.size);
console.log(set);


const set2 = new Set([1,2,3,4,3]);

console.log(set2);

console.log(set2.has(3));
console.log(set2.has(10));

console.log(set2.delete(10));
console.log(set2.delete(3));

for (const iterator of set2) {
    console.log(iterator);
}

const weakSet = new WeakSet([{a:1}, {b:2}, {c:3}]);

const obj1 = {a:1};

weakSet.add(obj1);
console.log(weakSet);
console.log(weakSet.has(obj1));



const sortedUsers = users.sort((a, b) =>{
    if (a.name < b.name){
        return -1;
    } 
    if (a.name > b.name) {
        return 1;
    }
});

console.log(sortedUsers);