let todoList = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
let choice = prompt("ENTER YOUR REQUEST:");
while(true){
    if(choice == "quit"){
        console.log("OK. YOU QUIT THE APP");
        console.log("-----------------------------");
        break;
    }
    if(choice == "delete"){
        let idx = prompt("ENTER YOUR INDEX WHICH YOU WANT TO DELETE:");
        todoList.splice(idx, 1);
        console.log("DELETED TASK!!");
        console.log("-----------------------------");
    }
    else if(choice == "list"){
        
        for(let i=0; i<todoList.length; i++){
            console.log(todoList[i]);
        }
       console.log("-----------------------------");
    }
    else if(choice == "add"){
        let add = prompt("ENTER YOUR TASK:");
        todoList.push(add);
        console.log("ADDED TASK!!");
    }
    else{
        console.log("WRONG REQUEST!!");
    }

    choice = prompt("ENTER YOUR REQUEST:");
}