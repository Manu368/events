let timerElement = document.getElementById("timer");
let defuseElement = document.getElementById("defusertext");
let imageElement = document.getElementById("image01");







let countdown = 10;

let unique = setInterval(function(){
    countdown = countdown - 1;
    timerElement.textContent = countdown;
    if(countdown === 0){
        timerElement.textContent = "BOOM!!";
        clearInterval(unique)
    }
},1000)



defuseElement.addEventListener("keydown", function(event){
    let inputElement = defuseElement.value;
    
    
    if(event.key === "Enter" && inputElement === "defuse" && countdown !== 0){
        timerElement.textContent = "YOU DID IT!!";
        clearInterval(unique)

    }

})
