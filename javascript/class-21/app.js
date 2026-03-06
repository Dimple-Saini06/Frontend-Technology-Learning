///// BREAKPOINTS AND CALL STACK LEARN ////////
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();


////CALLBACK HELL ///////
// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextChangeColor){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextChangeColor) nextChangeColor();
//     }, delay);
// }

// changeColor("green", 1000, ()=>{
//     changeColor("red", 1000, ()=> {
//         changeColor("yellow", 1000, ()=>{
//             changeColor("skyblue", 1000);
//         });
//     });
// });

// function saveToDb(data, success, failure){
//     let internet = Math.floor(Math.random() * 10) + 1;
//     if(internet > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("Dimple", () => {
//     console.log("Success : Data1 was saved");
//     saveToDb("apna college", 
//         () => {
//             console.log("Success : Data2 was saved");
//         }, 
//         () => {
//             console.log("Failure : Data2 was not saved");
//         });
// }, 
// () =>{
//     console.log("Failure : Data1 was not saved");
// });


//////PROMISES //////
// function saveToDb(data){
//     return new Promise((resolve, reject)=>{
//         let internet = Math.floor(Math.random() * 10) + 1;
//         console.log(internet);
//         if(internet > 4){
//             resolve("successfully save data");
//         } else {
//             reject("failure to save data");
//         } 
//     });
// }

// saveToDb("apna college")
//     .then((result) => {
//         console.log("Data1 Saved");
//         console.log("result of promise : ", result);
//         return saveToDb("college");
//     })
//     .then((result) => {
//         console.log("Data2 Saved");
//         console.log("result of promise : ", result);
//     })
//     .catch((error) => {
//         console.log("Promise reject");
//         console.log("error of promise : ", error);
//     })



/////RESOLVE THE CALLBACK HELL PROBLEM //////

h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("successfully changed color");
        }, delay);
    });
};

changeColor("green", 1000)
.then((result)=>{
    console.log(result);
    return changeColor("red", 1000);
})
.then ((result)=>{
    console.log(result);
    return changeColor("yellow", 1000);
})
.catch((error)=>{
    console.log("error of promise : ", error);
})

