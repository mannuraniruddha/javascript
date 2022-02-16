const lsData = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=> {
            res("Left Side Data")
        }, 1000)
    })
};

const mainData = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=> {
            res("Main Data")
        }, 2000)
    })
};

const rsData = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=> {
            res("Right Side Data")
        }, 3000)
    })
};

// This is all at once in parallel/async
const loadData2  = async () => {
    try {
        console.time("Async2");

        // const res = await Promise.allSettled([
        //     lsData(),
        //     mainData(),
        //     rsData()
        // ]);

        const promises = [
            lsData(),
            mainData(),
            rsData()
        ];

        const res = await Promise.allSettled(promises);

        // if (res[2].status === "rejected"){
        //     console.log("Hiding Right Side");
        // }

        // or 

        for (let i = 0; i < res.length; i++) {
            if (res[i].status  === "rejected"){
                console.log("hiding ", res[i].reason);
            } 
        }

        console.log(res);
        console.timeEnd("Async2");
    } catch (error) {
        console.log(error);
    }
}

loadData2();
// Promise.all =>
// [ 'Left Side Data', 'Main Data', 'Right Side Data' ]

// If any fails =>
// Right Side Data

//  Please note : 
// If any one response fails, then Promise.all will fail entirely.
// To show at least partial data, we need to use the following approach.

// Promise.allSettled =>
// [ { status: 'fulfilled', value: 'Left Side Data' },
//  { status: 'fulfilled', value: 'Main Data' },
//  { status: 'rejected', reason: 'Right Side Data' } ]