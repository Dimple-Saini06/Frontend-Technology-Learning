/*let small = document.getElementsByClassName("oldImg");
for(let i=0;i<small.length;i++){
    small[i].src = "spiderman_img.png";
    console.log(`value ${i}  is changed..`);
}*/

/*let selector = console.dir(document.querySelector("h1"));
let classSelect = console.dir(document.querySelector(".oldImg"));
let idSelect = console.dir(document.querySelector("#mainImg"));
let allSelect = console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll(".box a"));*/

/*let para = document.querySelector("h1");
console.dir(para.innerText);*/


// let image = document.querySelector("img");
/*console.dir(document.querySelector("img").getAttribute("id"));
console.dir(document.querySelector("img").setAttribute("id", "setImg"));*/


/*let change = document.querySelectorAll(".box a");
for(let i=0;i<change.length;i++){
    change[i].style.backgroundColor = "yellow";
}*/


/*let heading = document.querySelector('h1');
heading.classList.add("green");*/

/*let h4 = document.querySelector('.box');
console.dir(h4.parentElement);
console.dir(h4.children);
console.dir(h4.childElementCount);
console.dir(h4.previousSibling);
h4.nextElementSibling.style.backgroundColor = 'red';*/

/*let para = document.createElement('p');
para.innerText = "Hii, i am a new p.";
let body = document.querySelector('body');
body.appendChild(para);
para.append(" This is me")
para.prepend("Welcome, ");*/

/*let btn = document.createElement('button');
btn.innerText = "Click Me";
let para = document.querySelector('p');
para.insertAdjacentElement('afterend', btn);*/
// document.querySelector('body').removeChild(btn);
// btn.remove();

/*let btn = document.querySelector("button");
btn.onclick = function (){
    console.log("print");
}*/

// let btns = document.querySelectorAll("button");
/*for(btn of btns){
    btn.onclick = sayHello;

    btn.onmouseenter = function(){
        console.log("YOU USE mouseenter");
    }
}
function sayHello(){
        console.log("YOU USE onclick");
    }
}*/

/*for(btn of btns){
    btn.addEventListener("click", function(){
        console.log("YOU USE EVENT LISTENER");
    })

    btn.addEventListener("click", function(){
        alert("YOU USE EVENT");
    })

}*/

/*let box = document.querySelector(".box");

box.addEventListener("mouseenter", function() {
    console.log("Hover The Div");
})*/

// let btn = document.querySelector("button");
/*btn.addEventListener("click", function() {
    console.log(this);
    console.dir(this);
    this.style.background = "blue";
})*/


/*btn.addEventListener("mouseenter", function() {
    console.log("button clicked");
    console.log(event);
})*/

/*let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log("key presed");
})*/


/*let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    /*let user = form.elements[0];
    let pass = form.elements[1];
    console.log(user.value);
    console.log(pass.value);*/
// });

/*let user = document.querySelector("#user");
user.addEventListener("change", function(event){
    console.log("input event");
    console.log("final event", user.value);
});

user.addEventListener("input", function(event){
    console.log("input event1");
    console.log("final event1", user.value);
});*/

