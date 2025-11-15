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

let url = "https://catfact.ninja/fact";

fetch(url)
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
    })
    .catch((err) => {
        console.log(err);
    });


console.log("This is after the fetch call");
