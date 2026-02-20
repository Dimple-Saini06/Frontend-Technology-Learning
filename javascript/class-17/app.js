// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// let student = [{name : "dimple"}, {name : "garima"}, {name : "dish"}, {name : "komal"}];
// let newarr = [...student];
// let students = ["dimple","garima","dish","komal"];
// let obj = {...students};

// const fruits = ['apple', 'banana'];
// const moreFruits = [ 'orange', 'kiwi',...fruits];
// console.log(fruits);
// console.log(moreFruits);

// function sum(...arg){
//     return arg.reduce((s,e)=> s+e);
// }

// console.log(sum(1,2,3,4));
// console.log(sum(5,6,7,8));

// let student = {
//     name:"dimple",
//     cgpa : 86.40,
//     subjects : ["maths", "science"],
//     // city : "Ajmer",
//     email : "dimple@gmail"
// };

// let {name : user, cgpa : score, city:place = "jaipur"} = student;

// let Object = ["dimple", "garima"];
// let [username] = Object;


let arr= [1,2,3,4];
// let squ = arr.map(el => el*el);
// let sum = squ.reduce((a,e) => (a+e));
// let avg = sum/arr.length;


// let newArr = arr.map(el => el+5);

let obj1 = {
    name:"dimple",
    cgpa : 86.40,
    city : "Ajmer",
};

let obj2 = {
    name:"komal",
    cgpa : 86,
    city : "kota",
};

// function mergeObj(obj1, obj2){
//     return ({...obj1, ...obj2});
// }

const mergeObj = (obj1, obj2) => ({...obj1, ...obj2});
let obj3 = {...obj1, ...obj2};