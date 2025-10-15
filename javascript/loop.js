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

let fruits = [["apple", "banana", "grapes"], ["mango", "litchi", "strawberry"]];
for(frut of fruits){
    for(fru of frut){
        console.log(fru);
    }
}