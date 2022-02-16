const arr = [...Array(100000).keys()];
console.time("for")
for (let i = 0; i<arr.length; i++){

}
console.timeEnd("for")
console.time("while")
let j = 0;
while (j<arr.length){
    j++;
}

console.timeEnd("while")


const users = [
    {id: 1, name:"Aniruddha", gender: "M"},
    {id:2, name:"Shruti", gender:"F"},
    {id:3, name:"Ankush", gender: "M"},
    {id:4, name:"Shruti", gender:"F"},
]

// findIndex

const index = users.findIndex(item =>{
    console.log(item.name, item.id);
    return item.id === 1;
})


// find

const anirudh = users.find(item => item.name === "Shruti")
console.log(anirudh);


// filter

const maleRecords = users.filter(item => item.id>0 && item.gender === "M")

console.log(maleRecords);

const femaleRecords = users.filter(item => item.id>0 && item.gender === "F")

console.log(femaleRecords);


// every

const isAllMale = users.every(x => x.gender === "M")

console.log(isAllMale);

//