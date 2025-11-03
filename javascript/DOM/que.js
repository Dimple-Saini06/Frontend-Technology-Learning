let para = document.createElement('p');
para.innerText = "Hey I'm red!";
let body = document.querySelector('body');
body.append(para);
para.style.color = 'red';

let heading = document.createElement('h3');
heading.innerText = "I'm a blue h3!";
body.append(heading);
heading.style.color = 'blue';

let div = document.createElement('div');
body.append(div);
div.style.backgroundColor = 'pink';
div.style.border = '2px solid black';

let heading1 = document.createElement('h1');
heading1.innerText = "I'm in a div";
div.append(heading1);

let para1 = document.createElement('p');
para1.innerText = "ME TOO!";
div.append(para1);

