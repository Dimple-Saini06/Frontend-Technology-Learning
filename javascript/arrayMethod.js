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


const info = {
    email : "xyz.gmail.com",
    password : 123
};

const dataCopy = {...info, id:101};