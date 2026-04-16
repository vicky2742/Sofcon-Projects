let quote=document.querySelector("#quotes");
let author=document.querySelector("#author");
let btn=document.querySelector("button");
let URL=`https://dummyjson.com/quotes/random`;

btn.addEventListener("click",async()=>{
    // console.log("clicked");
    try {
    const response = await fetch(URL);
    const data = await response.json();

    // console.log(data);
    // console.log(data.quote);
    // console.log(data.author);

    quote.innerText=`${data.quote}`;
    author.innerText=`${data.author}`; 


    } catch (error) {
    console.log("Error:", error);
    quote.innerText = "Quote not found";
    }
})
