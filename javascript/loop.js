//odd number   
/*console.log("ODD NO.:");
for(let i=1;i<=15;i=i+2){
    console.log(i);
}

//even number
console.log("EVEN NO.:");
for(let i=2;i<=10;i=i+2){
    
    console.log(i);
}

//table
let n = prompt("TELL ME WHAT THE TABLE YOU PRINT (WRITE NUMBER):");
console.log("Table of ", n, ":")
for(let i=1; i<=10; i++){
    console.log(n, "X", i, "=", n*i);
}*/

//MOVIE GAME
/*let movie = "SHIDDAT";
let guess = prompt("GUESS THE MOVIE NAME:");
while((guess!=movie)&&(guess != "quit")){
    guess = prompt("WRONG GUESS, TRY AGAIN");
}

if(guess == movie){
    console.log("CONGRATS");
}
else{
    console.log("YOU QUIT THE GAME");
}*/

//LOOPS WITH ARRAY
/*let fruit = ["apple", "litchi", "grapes", "banana", "mango"];
for(let i=0;i<fruit.length;i++){
    console.log(i, fruit[i]);
}*/


/*let fruits = [["apple", "banana", "grapes"], ["mango", "litchi", "strawberry"]];
for(let i=fruits.length-1; i>=0;i--){
    console.log(`INNER GROUP: ${i}`);
    for(let j=fruits[i].length-1; j>=0; j--){
        console.log(fruits[i][j]);
    }
}*/

/*let fruits = [["apple", "banana", "grapes"], ["mango", "litchi", "strawberry"]];
for(frut of fruits){
    for(fru of frut){
        console.log(fru);
    }
}*/



//QUES
// 1
/*let arr = [1,2,3,4,5,6,2,3];
let num = prompt("ENTER A NUMBER:");
for(let i=0;i<arr.length;i++){
    if(arr[i]== num){
        arr.splice(i,1);
    }
}

console.log(arr);*/


//2
/*let number = 287152;
let sum = 0;
while(number > 0){
    let rem = number % 10;
    sum += rem;
    number= Math.floor(number / 10);
}
console.log("SUM OF DIGITS:", sum);*/



//3
/*let n = prompt("ENTER A NUMBER:");

while(n>0){
   if(n==0){
    console.log("1");
    break;
   }
   else{
    let fact = 1;
    for(let i=n;i>=1;i--){
        fact = fact*i;
    }
    console.log(fact);
    break;
   }
}*/


//4
/*let arr=[12,995,10,4,2,27,1,9];
let largest=0;
for(let i=0;i<arr.length;i++){
    if(largest <arr[i]){
        largest = arr[i];
    }
    
}
console.log(largest);*/


//5
/*let number=287152;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
    console.log(copy);
}
console.log(count);*/