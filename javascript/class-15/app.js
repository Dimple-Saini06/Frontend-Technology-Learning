// let sum =0;
// const arrayAverage = (arr) => {
//     for(let num of arr){
//         sum += num;
//     }
//     console.log(arr.length);
//     return sum/arr.length;
// }

// let arr = [4,5,6,7];
// console.log(arrayAverage(arr));


// const isEven = (n) => {
//     if(n % 2 == 0){
//         console.log("Even");
//     }else {
//         console.log("Odd");
//     }
// }

// isEven(13);
// isEven(6);


const object = {
    message : "hello world",
    logMessage(){
        console.log(this);
    }
}

setTimeout(object.logMessage, 4000);