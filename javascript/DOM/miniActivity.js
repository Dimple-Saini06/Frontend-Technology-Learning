/*let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let div = document.querySelector("div");
    let randomColor = getrandomColor();
    h3.innerHTML = randomColor;

    div.style.backgroundColor = randomColor;
});



function getrandomColor(){
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}*/

let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    let btn = document.createElement("button");
    btn.innerText = "delete";
    btn.classList.add("delete");
    item.appendChild(btn);
    input.value = "";
});

ul.addEventListener("click", function() {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted successfully!!");
    }
});