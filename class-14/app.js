// console.log(1+3);
// console.log(3**2);
// let a = 5;
// let b = '5';
// console.log(a==b);
// console.log(a===b);
// let age = prompt("enter age");
// age>=18?console.log("Adult"):console.log("not");

//STRING
// let s = "apna college";
// console.log(s.slice(-9));
// console.log(s.repeat(3).replace('l', '1'));

//ARRAY
// let arr = ['a', 'b','c'];
// let s = 1;
// let s1 = "1";
// // let s2 = s.concat(s1);
// arr[7] = 'd';
// arr.unshift('e');
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// const arr = [1,2,3];
// let arr1 = [[2,4], [6,8]];
// for(let a of arr1){
//     for(let a1 of a){
//         console.log(a1);
//     }
// }
// let a = prompt("num");
// a = parseInt(a);
// for(let i=1;i<=10;i++){console.log(a * i);}


//OBJECTS
// let std = {
//     // name : "dimple",
//     // branch : "IT",
//     // Rollno : 9
//     aman : {
//         grade : 'A+',
//         city : 'Ajmer'
//     },
//     shardha : {
//         grade : 'A',
//         city : 'Jaipur'
//     }
// };

// for(let keys in std){
//     console.log("keys : " + keys + " value : " + std[keys]);
// }

// std.garima={grade:'A++', city:"Jodhpur"};


//ARRAY OF OBJECT
// let std = [
//     {
//         name : "dimple",
//         grade : 'A+',
//         city : 'Ajmer' 
//     },

//     {
//         name : "dimple",
//         grade : 'A+',
//         city : 'Ajmer' 
//     }
// ];

// let name = prompt("enter the name");
// let age = prompt("enter the age");
// let print = alert(`${name} is ${age} year old`);

// let arr= [1,2,3,4,5];
// let n = prompt("enter n");
// for(let i=arr.length-1;i>=n;i--){
//     console.log(arr[i]);
// }


// let s = Math.floor(Math.random() * 5) + 11;

// let car = {
//     name : "bmw",
//     Model : "High",
//     color : "black"
// };


function outer() {
    let x =5, y=6;
    function inner(){
        let z=8;
        console.log(x);
        console.log(y);
    }
    inner();
}

outer();

// let sum = function(a,b){
//     return a+b;
// }

// sum = function(a,b){
//     console.log("namaste");
// }

// function multiple(func, count){
//     func();
//     count();
// }

// let func = function(){
//     console.log("Hello");
// }

// let count = function(){
//     console.log("Namaste");
// }

// multiple(func, count);

//QUE
// function uniqueStr(s){
//     let str = "";
//     for(let i=0;i<s.length;i++){
//         if(!(str.includes(s[i]))){
//             str += s[i];
//         }
//     }
//     return str;
// }
// console.log(uniqueStr("abcdabcdefgggh"));


// let arr = [10,12,3,4,5,6,7];
// let num = 4;

// for(let i=0;i<arr.length;i++){
//     if(arr[i] > num){
//         console.log(arr[i]);
//     }
// }


// let num = prompt("enter the number");
// let arr;
// let curr = 0;
// for(let i=0;i<num;i++){
//     arr[i] = prompt("enter country name");
//     curr = arr[i].length;
//     if(curr > max){
//         max = curr;
//     }
// }

 
// function countVowel(s){
//    let count = 0;
//     for(let i=0;i<s.length;i++){
//         if(s.charAt(i)=='a' || s.charAt(i)=='e' || s.charAt(i)=='i' || s.charAt(i)=='o' || s.charAt(i)=='u'){
//             count++;
//         }
//     }
//     return count;
// }


// console.log(countVowel("chanda"));



// function range(start, end){
//     let diff = end-start;
//     console.log(Math.floor(Math.random() * diff) + start);
// }
// let start = 5;
// let end = 10;
// range(start, end);


// const mul = (a,b) => a*b;

// console.log("hello");
// setTimeout(()=> {
//     console.log(a);
// }, 3000);
// console.log("hello");
// console.log("hello");