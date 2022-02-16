const lsData = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=> {
            rej("Left Side Data")
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
const loadData1  = async () => {
    try {
        console.time("Async1");

        const promises = [
            lsData(),
            mainData(),
            rsData()
        ];

        const res = await Promise.race(promises);

        for (let i = 0; i < res.length; i++) {
            if (res[i].status  === "rejected"){
                console.log("hiding ", res[i].reason);
            } 
        }

        console.log(res);
        console.timeEnd("Async1");
    } catch (error) {
        console.log(error);
    }
}

loadData1();

// This will show the winner among three services
// If, the winner is Rejected the it'll go to Catch
// However, if any or all of the non-winners get rejected,
// then, it 'll not affect or it won't go to catch block
// To avoid getting an error response from the Winner, we
// should give chance to the other non-winner/2nd winner
// to fetch the success response.



const loadData2  = async () => {
    try {
        console.time("Async2");

        const promises = [
            lsData(),
            mainData(),
            rsData()
        ];

        const res = await Promise.any(promises);

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