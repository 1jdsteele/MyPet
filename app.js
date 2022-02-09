console.log("MyPet works!!!");

// ====== VARIABLES =======

let hunger = 0;
let sleepy = 0;
let bored = 0;
let age = 0;


// ======== text changers ======
/*
$("#hunger").text("Hunger: " + hunger);
$("#sleepiness").text("Sleepiness: " + sleepy);
$("#boredom").text("Boredom: " + bored);
*/


//===== FUNCTIONS =======
/*
function hungerFuncUp() {
    setInterval(() => {feed++}, 1000);
}

hungerFuncUp();
*/

// ========= function to start game ==========

function startGame() {
    setInterval(hungerFuncUp, /*Math.floor(Math.random())*/1000);
    setInterval(sleepFuncUp, /*Math.floor(Math.random())*/1000);
    setInterval(boredFuncUp, /*Math.floor(Math.random())*/1000);
    setInterval(ageFuncUp, /*Math.floor(Math.random())*/5000)
    setInterval(death, /*Math.floor(Math.random())*/1000);
    

    if (hunger === 10 || sleepy === 10 || bored === 10){
        console.log("GAME OVER")
        return;
    }
}
startGame();


//========functions stats go up and death  ========

function hungerFuncUp() {
    hunger++;
    /*if (hunger === 10){
        $("#hunger").text("You killed him!");
    } else */$("#hunger").text("Hunger: " + hunger);
    
};

function sleepFuncUp() {
    sleepy++;
    /*if (sleepy === 10){
        $("#sleepiness").text("You killed him!");
    } else*/ $("#sleepiness").text("Sleepiness: " + sleepy);
    
}

function boredFuncUp() {
    bored++;
  /*  if (bored === 10){
        $("#boredom").text("You killed him!");
    } else*/ $("#boredom").text("Boredom: " + bored);
}
/*
setInterval(hungerFuncUp, 1000);
*/

function ageFuncUp() {
    age++;
    $("#age").text("Age: " + age);
};





//========== actions make stats go down ============

$("#feed").on("click", () => {
    
    hunger--;
    $("#hunger").text("Hunger: " + hunger);
    

});

$("#quiet").on("click", () => {
    
    sleepy = 0;
    $("#sleepiness").text("Sleepiness: " + sleepy); 

});

$("#fun").on("click", () => {

    bored = bored - 2 ;
    $("#boredom").text("Boredom: " + bored); 

});

//========= death scenarios ==============
function death() {
if (hunger === 10 || sleepy === 10 || bored === 10){
    $("#fun").text("You killed him!");    
    $("#quiet").text("You killed him!");
    $("#feed").text("You killed him!");
    $("#hunger").text("You killed him!");
    $("#boredom").text("You killed him!");
    $("#sleepiness").text("You killed him!");
    
};
};

//=========user input ===========
//this section from Dalton Justis-Hart

document.querySelector("#commentButton").addEventListener("click", function(event){
    
    //this will prevent a default submission of a form
    
    event.preventDefault();

    //this will stop the parent event trigger
    
    event.stopPropagation();

    //get user input 
    
    const userInput = document.querySelector("#commentInput").value;


    //create an element
    
    const newComment = $('#nameDisplay');
    newComment.text("Your pet's name is " + userInput);

 


    //this one empties the input field
    document.querySelector("#commentInput").value = "";
});








//clearInterval