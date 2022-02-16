const userInfo = () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res("User is there")
        }, 1000);
    })
};

const instaFeed = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Insta Feed for the user");
        }, 2000);
    });
};


const loadData = async () => {
    try {
        const promises = [
            userInfo(),
            instaFeed()
        ]

        const res = await Promise.allSettled(promises);

        // for (let i = 0; i < res.length; i ++) {
        //     console.log(res[i]);

        //     if (res[i].status === "rejected" && res[i].reason ==="User is there") {
        //         console.log("Hide Everything");
        //     }
        // }

        if (res[0].status === "rejected") {
            throw new Error("Display Error in full screen");
        } else if (res[1].status === "rejected") {
            console.log("All not good with the FEEDs!!");
        } else {
            console.log("Everything went well !! \nFeeds are being shown here to a valid user. ");
        }

    } catch (error) {
        console.log(error);
    }
}

loadData();
