// let url = "https://catfact.ninja./fact";

// async function getFacts(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//     // return 6;
// }
// getFacts();


// let url = "https://catfact.ninja./fact";
// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// btn.addEventListener("click", async function getFacts(){
//     let res = await axios.get(url);
//     p.innerText = res.data.fact;
//     console.log(res.data.fact);
// });


// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");
// let img = document.querySelector("#res");

// btn.addEventListener("click", async ()=>{
//     let link = await getImage();
//     console.log(link);
//     img.setAttribute("src", link);
// })

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         console.log(res);
//         return res.data.message;
//     } catch(e) {
//         console.log("eroor - ", e);
//     }
// }


// let url3 = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     const config = {headers: {Accept : "text/plain"}};
//     let joke = await axios.get(url3, config);
//     console.log(joke.data);
// }
// getJokes();
