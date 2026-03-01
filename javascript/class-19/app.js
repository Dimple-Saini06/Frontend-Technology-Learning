let btn = document.querySelector("button");
let form = document.querySelector("form");
let user = document.querySelector("#user");
// btn.onclick = function() {
//     // console.dir(this);
//     console.log(this);
// }

// btn.onclick = function() {
//     console.dir(this);
//     // console.log(this);
// }

// function sayname() {
//     console.log(this);
//     alert(this.innerText);
// }

// function sayHello() {
//     this.style.backgroundColor = "blue"
//     console.dir("Hello");
// }
// btn.addEventListener("click", sayname);
// btn.addEventListener("click", sayHello);

// btn.addEventListener("mouseenter" , function(event){
//     console.log(event);
//     // console.dir(event);
// })

// let input = document.createElement("input");
// btn.appendChild(input);

// input.addEventListener("keyup", function() {
//     console.log("print");
// })

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let u = document.querySelector("#user");
//     let a = form.elements[4];
//     console.log(a.value);
// })

user.addEventListener("input", function() {
    console.log("input");
    console.log(this.value);
})