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


let student = [
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


console.log(gpa);