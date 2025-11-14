let h1 = document.querySelector("h1");

/*function colorChange(color, delay, nextcolorChange){
    setTimeout(() => {
        h1.style.color = color;
        nextcolorChange();
    }, delay);
}*/

function colorChange(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("promise reject");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("Successfully");
        },delay);
    });
}
// 1.
/*colorChange("red", 1000, () =>{
    colorChange("green", 1000, () =>{
        colorChange("blue", 1000, () =>{
            colorChange("yellow", 1000, () =>{
                colorChange("purple", 1000, () =>{
                })
            })
        })
    })
})*/

// 2.
// 
/*function colorChange(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Successfully");
        }, delay);
    })
    
}

let request = colorChange("red", 5000);
    request.then((result) => {
        console.log(result);
        return colorChange("green", 1000);
    })

    .then((result) => {
        console.log(result);
        return colorChange("blue", 1000);
    })

    .then((result) => {
        console.log(result);
        return colorChange("yellow", 1000);
    })

    .then((result) => {
        console.log(result);
    })

    .catch((error) => {
        console.log(error);
    })*/


// 3.
async function demo () {
    try{
        await colorChange("red", 1000);
        await colorChange("green", 1000);
        await colorChange("orange", 1000);
        await colorChange("purple", 1000);
    }
    catch(err){
        console.log(err);
    }
    let a = 6;
    console.log(a);
    console.log(a+3);

}

/*function savetoDb(success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    }
    else{
        failure();
    }
}

savetoDb( 
    () => {
        console.log("Success: Your Data Was Saved.");
        savetoDb( 
            () => {
                console.log("Hello was add.");
            },
            () => {
                console.log("Hello was not add.");
            }
        ),
        savetoDb(
            () => {
                console.log("world was add.");
            },
            () => {
                console.log("world was not add.");
            }
        )
        
    },
    () => {
        console.log("Failure: Your Data Was Not Saved.");
    }
);*/



/*function savetoDb() {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 5) {
            resolve("Success");
        }
        else{
            reject("Failure")
        }
    });
    
}

savetoDb()
    .then((result) => {
        console.log("Data1 Saved.");
        console.log("result is:", result);
        return savetoDb(); 
    })

    .then((result) => {
        console.log("Data2 Saved.");
        console.log("result is:", result);
        return savetoDb();
    })

    .then((result) => {
        console.log("Data3 Saved.");
        console.log("result is:", result);
    })

    .catch((error) => {
        console.log("reject failure");
        console.log("error is:", error);
    })*/

async function greet() {
    return "hello world";
}

console.log(greet());