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


// This goes in sequence/sync

const loadData = async () => {
    try {
        console.time("Async");
        const lsRes = await lsData();
        const mainRes = await mainData();
        const rsRes = await rsData(); 
        console.timeEnd("Async");
    } catch (error) {
        console.log(error);
    }
}

loadData();


// This is all at once in parallel/async
const loadData2  = async () => {
    try {
        console.time("Async2");
        const res = await Promise.all([
            lsData(),
            mainData(),
            rsData()
        ]);
        console.log(res);
        console.timeEnd("Async2");
    } catch (error) {
        console.log(error);
    }
}

loadData2();
