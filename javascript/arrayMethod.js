// let arr = [1,2,3,4,5];

/*function print(el){
    console.log(el);
}

arr.forEach(print);


arr.forEach(function(el){
    console.log(el);
})*/


/*let newarr = arr.map(function(el){
    console.log(el);
});*/


/*let student = [
    {
        name:"Aman",
        marks:95,
    },
    {
        name:"kushal",
        marks:99.99,
    },
    {
        name:"dimple",
        marks:92
    }
];

let gpa = student.map((el) => {
    return el.marks/10;
});


console.log(gpa);*/


// let arr = [2,4,6,1];

/*let newArr = arr.filter(function(el) {
    return el%2==0;
});

console.log(newArr);*/

// let newarr = arr.some((el) => (el%2==0));

/*let arr = [2,3,4,6,1,7,5,8,9,0];

let ans = arr.reduce((max, el) => {
    if(max  < el){
        console.log(el);
        return el;
    }
    else{
        return max;
    }
})*/


/*let arr = [10,50,20];

let ans = arr.every(function(el) {
    return el%10 == 0;
});

console.log(ans);*/


/*let arr = [1,2,3,5,0,4,8];

let minVal = arr.reduce((min, el) => {
    if(min > el){
        return el;
    }
    else{
        return min;
    }
    
});


console.log(minVal);*/


/*function sum(a, b=8){
    return a+b;
}

console.log(sum(2));*/


// let arr = [2,19,3,4,10,2,4,9,1];
// let min = arr[0];
// for(let i=1;i<arr.length;i++){
//     min = Math.min(min,arr[i]);
    
// }
// console.log(min);
/*let newarr = [...arr];
console.log(arr);*/


/*const info = {
    email : "xyz.gmail.com",
    password : 123
};

const dataCopy = {...info, id:101};*/


//REST
/*function sum(msg, ...args){
    console.log(msg);
    return args.reduce((sum, el) => sum+el);
}

console.log(sum("SUM IS: ", 1,2,3,4));*/

//DESTRUCTURING
/*let name = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, ...other] = name;
*/


/*const std = {
    name: "dimple",
    age: 19,
    username : "dish613",
    password : 124
};

let {username:user, password:pass} = std;*/


// let arr = [1,2,3];
/*let squ = arr.map(function(el){
    return el * el;
})
let finalans = squ.reduce((sum, el) => sum+el, 0);

let avg = finalans/ arr.length;
console.log(avg);*/


/*let original = arr.map(function(el) {
    return el+5;
})
console.log(original);*/


/*let str = ["hello", "world", "everyone"];
let newArr = str.map(function(el){
    return el.toUpperCase();
})

console.log(newArr);*/

/*const ans = (arr, ...arg) => [...arr, ...arg.map((v) => v*2)];
console.log(ans([1,2,3,4], 5,6));*/

/*const obj1 = {
    name:"dimple",
    age: 19,
    course: "B.tech"
};

const obj2 = {
    username : "dish.123",
    password : 123
};

const mergeobj = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeobj(obj1,obj2));*/
