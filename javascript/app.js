//TRAFFIC LIGHT EXAMPLE
/*let color = "blue";
if(color == "red"){
    console.log("STOP");
}
else if(color == "yellow"){
    console.log("WAITING");
}
else if(color == "green"){
    console.log("GO");
}
else{
    console.log("color is not related..");
}*/

// example of conditional statement

/*let price = 'M';

if(price == 'XL'){
    console.log("XL Popcorn Price is : 250 rupees.")
}
else if(price == 'L'){
    console.log("L Popcorn Price is : 200 rupees.")
}
else if(price == 'M'){
    console.log("M Popcorn Price is : 100 rupees.")
}
else {
    console.log("S Popcorn Price is : 50 rupees.")
}*/



//MARKS EXAMPLE
/*let marks = 23;

if(marks > 33){
    if(marks > 33 && marks <= 60){
        console.log("PASS WITH GRADE B");
    }
    else if(marks > 60 && marks <= 80){
        console.log("PASS WITH GRADE A");
    }
    else{
        console.log("EXCELLENT.. PASS WITH GRADE A++")
    }
}
else{
    console.log("BETTER LUCK NEXT TIME!!");
}*/


//GOOD AND BAD STRING EXAMPLE

/*let str = "ap";

if(str[0] == 'a' && str.length > 3){
    console.log("GOOD STRING");
}
else{
    console.log("BAD STRING");
}*/

/*let num = 12;
if((num % 3 === 0) && ((num+1 === 15) || (num-1 === 11))){
    console.log("safe");
}
else{
    console.log("unsafe");
}*/

//switch cases
/*let day = 9;

switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("NO WEEKEND NUMBER!!");
        break;
}*/


//generate warning and error


alert("THIS IS GOOD WEBSITE");
let name = prompt("give me your name!");
let mes = "WELCOME"+ " " + name + "!"; 
alert(mes);

console.warn("THIS IS WARNING");
console.error("THIS IS ERROR");