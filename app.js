console.log("MyPet works!!!");

// ====== VARIABLES =======

let hunger = 0;
let sleepy = 0;
let bored = 0;


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
}
startGame();


//========functions stats go up  ========

function hungerFuncUp() {
    hunger++;
    if (hunger === 10){
        $("#hunger").text("You killed him!");
    } else $("#hunger").text("Hunger: " + hunger);
    
};

function sleepFuncUp() {
    sleepy++;
    if (sleepy === 10){
        $("#sleepiness").text("You killed him!");
    } else $("#sleepiness").text("Sleepiness: " + sleepy);
    
}

function boredFuncUp() {
    bored++;
    if (bored === 10){
        $("#boredom").text("You killed him!");
    } else $("#boredom").text("Boredom: " + bored);
}
/*
setInterval(hungerFuncUp, 1000);
*/
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
function thisBetterRun() {
if (hunger === 10 /*|| sleepy === 10 || bored === 10*/){
    $("#fun").text("You killed him!");
    console.log("It ran!")
    /*
    $("#quiet").text("You killed him!");
    $("#feed").text("You killed him!");
    $("#hunger").text("You killed him!");
    $("#buredom").text("You killed him!");
    $("#sleepiness").text("You killed him!");
    */
};
};

thisBetterRun();







//clearInterval