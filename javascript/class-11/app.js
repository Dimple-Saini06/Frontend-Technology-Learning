let h1 = document.querySelector("h1");

/*function colorChange(color, delay, nextcolorChange){
    setTimeout(() => {
        h1.style.color = color;
        nextcolorChange();
    }, delay);
}

colorChange("red", 1000, () =>{
    colorChange("green", 1000, () =>{
        colorChange("blue", 1000, () =>{
            colorChange("yellow", 1000, () =>{
                colorChange("purple", 1000, () =>{
                })
            })
        })
    })
})*/

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
    })

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