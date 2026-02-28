let btn = document.querySelector("button");
let img = document.querySelector(".heart");
// console.dir(btn);
// btn.ondblclick = function() {
//     btn.classList.add("colorChange");
// }
// btn.onclick = function() { 
//     btn.classList.remove("colorChange");
// }

let div = document.querySelector("div");
div.onmouseleave = function() {
    div.classList.add("heart");
}

div.ondblclick = function() {
    div.classList.remove("heart");
}