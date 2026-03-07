// let demo = async () => {
//     return 6;
// }

// console.log(demo());

// h1 =document.querySelector("h1");

// function changeColor(color){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3){
//                 reject("promise reject");
//             }

//             h1.style.color = color;
//             console.log("Color was ", color)
//             resolve("changed color");
//         },1000);
//     });
// }

// async function giveColor(){
//     try {
//         await changeColor("red",1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("yellow", 1000);
//         await changeColor("skyblue", 1000);
//     }
//     catch(e) {
//         console.log(e);
//     }
    

//     console.log("successfully chnaged");
// }

// giveColor();


////api////
// let jsonFormt = '{"message":"https:\/\/images.dog.ceo\/breeds\/spitz-indian\/Indian_Spitz.jpg","status":"success"}';
// let valForm = JSON.parse(jsonFormt);
// console.log(valForm.message);
// console.log(typeof valForm);

// let chnage = JSON.stringify(valForm);

let url = "https://catfact.ninja./fact2";

fetch(url)
.then((res)=> {
    return res.json();
})
.then((res)=>{
    console.log(res.fact);
})
.catch((err) => {
    console.log(err);
})