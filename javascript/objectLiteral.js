/*const thread = {
    username : "code_master",
    content : "JAVASCRIPT OBJECT LITERAL LEARNING!!",
    likes : 150,
    reposts : 25,
    tags : ["JAVASCRIPT", "OBJECT"]
};


const std = {
    name : "Dimple saini",
    age : 18,
    course : "B.tech"
};

console.log(std);

std.name = "DIMPLE SAINI";
console.log(std);

std.gender = "female";
console.log(std);

delete std.age;
console.log(std);



const classInfo = {
    aman : {
        grade : "A+",
        city : "jaipur"
    },

    raju : {
        grade : "B",
        city : "delhi"
    }
}


const classInfo = [
    {
        name: "dimple",
        grade:"A++"
    },

    {
        name: "kushal",
        grade: "A"
    }
];*/



//GAME
let num = prompt("ENTER THE RANGE WHICH YOU WANT TO GUESS");
let randomNum = Math.floor(Math.random() * num) +1;
let GuessNum = prompt("GUESS THE NUMBER");
while(true){
    if(GuessNum == "quit"){
        console.log("YOU QUIT THE GAME");
        break;
    } 

    if(randomNum == GuessNum){
        console.log("YOU WIN! CONGRATS!! random number was", randomNum, "!!");
        break; 
    }
    else if(GuessNum < randomNum){
        GuessNum = prompt("WRONG GUESS!! THE NUMBER TOO SMALL...");
    }
    else{
        GuessNum = prompt("WRONG GUESS!! THE NUMBER TOO LARGE...");
    }
}