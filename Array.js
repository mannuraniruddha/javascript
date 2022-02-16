const b = 5;
const obj = {
    a:1,
    b: 2,
    c:3
}
 const key = "b";
 const newObj = {d:10,e:12, ...obj};
 console.log(newObj);
 const {c,[key]:b1, ...restObj} = newObj;
 console.log(restObj);

 const {d, e, a} = restObj
console.log(d);
console.log(e);
console.log(a);

