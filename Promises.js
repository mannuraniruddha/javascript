// Promises

// Stages :
// 1. Pending
// 2. O/P : Resolved/Rejected

const p1 = () => {
    return new Promise((res, rej) => {
        res("P1 Resolved.");
        // rej("Error here.");
    })
}


console.log("S1");
p1()
.then((val) => {
    console.log("AS1 ",  val);
}).catch((err)=>{
    console.log(err);
});
console.log("S2");

// the Order of execution is : S1, S2 and AS1


// Auth method execution, for OAuth-2.0
// Old JavaScript way of doing things

const users = (token) => {
    return new Promise((res, rej)=>{
        if (!token) {
            rej("Token is unavailable");
        }
        setTimeout(()=> {
            res("Here is the User Data")
        }, 2000)
    })
};

const login = () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res("Access Token")
        }, 1000)

        // setTimeout(()=> {
        //     rej("Invalid User")
        // }, 1000)

    })
}

// The reason this is not a good approach is because, 
// It has block (then, catch) inside another block (then, catch)
// If we have some more blocks, it doesn't look nice

login()
.then((val) =>{
    console.log(val);
    users(val)
    .then((retVal1) => {
        console.log(retVal1);
    })
    .catch((retVal2)=> {
        console.log(retVal2);
    })
})
.catch((err) => {
    console.log(err);
})


// Hence, better way of writing the code is : 

const loadData = async () => {
    try {
        console.time("async")
        const loginRes = await login();
        console.log(loginRes);
        const userRes = await users(loginRes);
        // const userRes = await users();
        console.log(userRes);
        console.timeEnd("async");
    } catch (error) {
        console.log(error);
    }
}

await loadData();

// OR I can just write
// loadData();