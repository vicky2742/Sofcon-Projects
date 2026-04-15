// let incr=document.querySelector("#inc");
// let dec=document.querySelector("#dec");
// let reset=document.querySelector("#reset");
// let counterText=document.querySelector("#counter");


// let count=0;
// incr.addEventListener("click",()=>{
//     console.log("clicked");
// count++;
//     counterText.innerHTML=count;
// })
// dec.addEventListener("click",()=>{
//     console.log("clicked");
//     count--;
//     counterText.innerHTML=count;
// })
// reset.addEventListener("click",()=>{
//     console.log("clicked");
//     count=0;
//     counterText.innerHTML=count;
// })




const MAX=10;
let count=0;
let counterText=document.querySelector("#counter");
let btns=document.querySelector(".btns");

function updateUI(){
    counterText.innerHTML=count;
}
btns.addEventListener("click",(e)=>{
    // const id=e.target.id;
    const btn=e.target.closest("button")
    let id=btn.id;
    if(!btn){
        return;
    }
    if(count==10){
        alert("You reached counter limit");
    }
    if(id=="inc"&&count<10){
        count++;
        
    }
    else if(id=="dec"&&count>0){
        count--;
    }

    else {
        count=0;
    }
    updateUI();
})