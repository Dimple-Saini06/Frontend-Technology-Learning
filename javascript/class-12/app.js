/*let jsonRes = '{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62}';
console.log(jsonRes.fact);

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let std = {
    name: "dimple",
    marks: 99
};

let jsTojson = JSON.stringify(std);
console.log(jsTojson);*/

// let url = "https://catfact.ninja/fact";

/* fetch(url)
   .then((res) => {
        console.log(res);
        return res.json(); 
    })
    .then((data) => {
        console.log(data.fact); 
        return  fetch(url);      
    })
    .then((res1) => {
        console.log(res1);
        return res1.json();
    })
    .then((data1) => {
        console.log(data1.fact);
        return fetch(url);
    })
    .then((res2) => {
        console.log(res2);
        return res2.json();
    })
    .then((data2) => {
        console.log(data2.fact);
    })
    .catch((err) => {
        console.log(err);
    });*/

/*async function getvalue(){
    let res1 = await fetch(url);
    let data = await (res1.json());
    console.log(data.fact);
}*/

/*async function getvalue() {
    let res = await axios(url);
    console.log(res);
    console.log(res.data.fact);
}*/


// console.log("This is after the fetch call");

// let btn = document.querySelector("button");
/*let p = document.querySelector("#fact");

btn.addEventListener("click", async function() {
    let result = await getvalue();
    p.innerText = result;
});

async function getvalue() {
    try{
        let res = await axios(url);
        return res.data.fact;
    }
    catch(e) {
        return "error occured";
    }
}*/

/*let url2 = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("#result");

btn.addEventListener("click", async function() {
    let result = await getvalue();
    img.src = result;
});
async function getvalue() {
    try{
        let res = await axios(url2);
        return res.data.message;
    }
    catch(e) {
        return "NO image found";
    }
}*/


/*const url = "https://icanhazdadjoke.com/";
async function getJoke() {
    try{
        const config = {headers : {Accept : "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data.joke);
    }

    catch(err) {
        console.log(err);
    }
}*/

