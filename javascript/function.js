//function

//1
/*function poem() {
    console.log("Home is a sound.");
    console.log("I can hear it in the western meadowlark, the inlaid rocks in my driveway,in the accent and slang of my mom’s voice.");
    console.log("It’s engrained in her stretched vowels,");
    console.log("in her smashed-together words, in her hard Rs,");
    console.log("and in the word rez.")
}

poem();*/


//2
/*function dice() {
    console.log(Math.floor(Math.random() * 6)+1);
}

dice();*/


//3
/*function averageNum(a, b, c){
    let average = (a+b+c)/3;
    console.log(average);
}

averageNum(2,5,5);*/



//4
/*function printTable(num){
    for(let i=num;i<=num*10;i+=num){
        console.log(i);
    }
}

printTable(4);*/


//5
/*function sumNum(n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum;
}

console.log(sumNum(15));*/


//6
/*function concatArray(arr) {
    let str ="";
    for(let i=0;i<arr.length;i++){
        str += arr[i];
    }
    return str;
}

console.log(concatArray(["hello", "world", "is", "good"]));*/


//HIGHER ORDER FUNCTION
/*function change(fun, n){
    for(let i=0;i<n;i++){
        fun();
    }
}

let greet = function(){
    console.log("hello");
}

change(greet, 4);*/


/*let fun = function oddOrEven(request){
    if(request == "odd"){
        return function(n){
            console.log(n%2 != 0);
        }
        
    }
    else if(request == "even"){
        return function even(n){
            console.log(n%2 ==0);
        }
        
    }
    else{
        console.log("WRONG REQUEST");
    }
}
let request = "even";
let funct = fun(request);
console.log(funct(8));*/


//METHODS
/*const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
};*/


//7
/*function generateRandomNum(n){
    let random = Math.floor(Math.random() * n) + 1;
    return random;
}

console.log(generateRandomNum(10));*/


//8
/*function countVowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if("aeiouAEIOU".includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowel("kushal dimple"));*/


//9
/*function largestCountry(countries){
    for(let i=1;i<countries.length;i++){
        let prevCoun = countries[0];
        if(countries[i].length > prevCoun.length){
            prevCoun = countries[i];
            return prevCoun;
        }
    }
}

countries = ["Australia","Germany","United States of America"];
console.log(largestCountry(countries));*/


//10
/*function uniqueChar(str){
    let unique = "";
    for(let i=0;i<str.length;i++){
        if(!unique.includes(str[i])){
            unique += str[i];
            
        }
    }
    return unique;
}

let str = "abcdabcdefgggh";
console.log(uniqueChar(str));*/


//11
/*let arr = [1,2,3,4,6,7,8,9,5,10];
let num = 6;
function largestEle(arr, num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }  
}

largestEle(arr, num);*/



//this keyword
/*const person = {
    name :"Dimple",
    eng : 10,
    math:70,
    hindi:100,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.hindi)/3;
        return avg;
    }
}

console.log(person.getAvg());*/

//try & catch
/*console.log("hello");
try{
    console.log(a);
} catch{
    console.log("error is 'a' not defined");
}

console.log("hello1");*/


//arrow fxn
/*const sum = (a,b) => a+b;

console.log(sum(13,6));*/


//time function
/*console.log("hii");
setTimeout(name, 500);
console.log("welcome to");
function name(){
    console.log("APNA COLLLEGE!!");
};*/

/*let id = setInterval(name, 1000);
function name(){
    console.log("APNA COLLLEGE!!");
};*/

/*const std = {
    name:"kushal",
    age:25,
    gender:"male",
    getAvg: function(){
        console.log(this);
    },
    getGender: () => {
        console.log(this);
    }
};

std.getAvg();
std.getGender();*/



/*const squ = (n) => n*n;
console.log(squ(6));*/

/*let id = setInterval( () => {
    console.log("HELLO")
}, 2000);


setTimeout(() => {
    console.log("STOP");
    clearInterval(id);
}, 10000);*/


/*const arrayAvg = (arr) => {
    let avg = 0;
    for(let i=0;i<arr.length;i++){
        
        avg+= arr[i];
        
    }
     return avg/arr.length;
}

let arr = [2,4,6,8,10];
console.log(arrayAvg(arr));*/


/*const iseven = (n) =>{
    if(n%2 == 0){
        console.log("EVEN");
    } else{
        console.log("ODD");
    }
};

iseven(2);*/

/*const object = { 
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
object.logMessage();
setTimeout(object.logMessage,1000);*/

/*let length  = 4;
function callback() {
    console.log(this.length);
}


const object={
    length:5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);*/