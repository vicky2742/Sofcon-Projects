let input=document.querySelector("#no");
let btns=document.querySelector(".btns");
let checkBtn = document.querySelector("#checkBtn");
let resetBtn = document.querySelector("#resetBtn");
let message = document.querySelector("#msg");
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

btns.addEventListener("click",(e)=>{
    const btn=e.target.closest("button");
    let id=btn.id;
    let userGuess = Number(input.value);
    if(!btn){
        return;
    }
    if(id === "checkBtn"){
        if(userGuess === randomNumber){
        message.textContent = "Correct 🎉";
        } 
        else if(userGuess > randomNumber){
        message.textContent = "Too high";
        } 
        else {
        message.textContent = "Too low";
        }
    }
    if(id === "resetBtn"){
        input.value = "";
        message.textContent = "Start guessing....";
    }
    
})