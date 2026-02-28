// let para = document.querySelector('p');
// console.log(para);
// console.dir(para);
// console.dir(para.innerHTML);
// console.dir(para.innerText);
// console.dir(para.textContent);


// let img = document.querySelector("img");
// let id = img.getAttribute('id');
// let chng = img.setAttribute("id" , "mm");
// let find = img.getAttribute('class');
// img.setAttribute('class', "image");

// let box = document.querySelector(".box");
// box.classList.add('bg');
// console.log(box.parentElement);


// let btn = document.createElement("button");
// btn.innerText = "button";
// box.appendChild(btn);
// box.insertAdjacentElement('beforeend', btn);
// box.append("click me!");
// btn.remove();

let body = document.querySelector("body");
let container = document.createElement("div");
let p = document.createElement("p");
let h3 = document.createElement("h3");
let inDiv = document.createElement("div");
let h1 = document.createElement("h1");
let divP = document.createElement("p");

p.innerText = "Hey im red";
p.style.color = "red";

h3.innerText = "i'm blue";
h3.style.color = "blue";

inDiv.style.border = "solid black";
inDiv.style.backgroundColor = "pink";

h1.innerText = "im in a div";
divP.innerText = "Mee Too";

body.appendChild(container);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(inDiv);
inDiv.appendChild(h1);
inDiv.appendChild(divP);