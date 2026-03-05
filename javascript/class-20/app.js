// let inp = document.querySelector("input");
// inp.addEventListener("mouseenter", function(event) {
//     console.log(event);
// })

// inp.addEventListener("keypress", function(event) {
//     console.log(event);
// })

// inp.addEventListener("change", function() {
//     console.log("final = ", inp.value);
// })

// inp.addEventListener("input", function() {
//     console.log("input final = ", inp.value);
// })

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

function clickAny(event){
    event.stopPropagation();
    console.log(this , "was click");
}

div.addEventListener("click", clickAny);
ul.addEventListener("click", clickAny);

for(li of lis){
    li.addEventListener("click", clickAny);
}
