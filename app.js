

// ====== VARIABLES =======
let myPet = ""
let hunger = 0;
let sleepy = 0;
let bored = 0;
let age = 0;
let alive = true;
let hungerInterval = "";
let sleepInterval = "";
let boredInterval = "";
let ageInterval = "";
let deathInterval = "";
let evolutionInterval = "";





//===== FUNCTIONS =======


// ========= function to start game ==========

function startGame() {
    hungerInterval = setInterval(hungerFuncUp, 1000);
    sleepInterval = setInterval(sleepFuncUp, 1000);
    boredInterval =setInterval(boredFuncUp, 1000);
    ageInterval = setInterval(ageFuncUp, 5000);
    deathInterval = setInterval(death, 1000);
    evolutionInterval = setInterval(evolution, 1000);
    setInterval(endGame, 1000);
    setTimeout(level2, 25000);
    //let audio = new Audio ('https://drive.google.com/file/d/1ykEJaEwaLUzyEggjNevneungzPvAtcFJ/view?usp=sharing')
    //let audio = new Audio('https://drive.google.com/file/d/1ZuKqskAj1FarILcXzek-68Ws_cnZRScO/view?usp=sharing');
    //audio.play();
}

startGame();

function endGame() {
    if (hunger === 10 || sleepy === 10 || bored === 10){
        console.log("GAME OVER")
        clearInterval(hungerInterval);
        clearInterval(sleepInterval);
        clearInterval(boredInterval);
        clearInterval(ageInterval);
        clearInterval(deathInterval);
        clearInterval(evolutionInterval);

        
    }
}

function level2() {
        console.log("level2 funcitoning yo")
        setInterval(hungerFuncUp, 1000);
        setInterval(sleepFuncUp, 1000);
        setInterval(boredFuncUp, 1000);
        setInterval(ageFuncUp, 5000)
        setInterval(death, 1000);
        setInterval(evolution, 1000);
}


//========functions stats go up and death  ========

function hungerFuncUp() {
    hunger++;
    $("#hunger").text("Hunger: " + hunger);
    
};

function sleepFuncUp() {
    sleepy++;
    $("#sleepiness").text("Sleepiness: " + sleepy);
    
}

function boredFuncUp() {
    bored++;
    $("#boredom").text("Boredom: " + bored);
}


function ageFuncUp() {
    age++;
    $("#age").text("Age: " + age);
};





//========== actions make stats go down ============

$("#feed").on("click", () => {
    if (hunger === 0){
        hunger = 0;
        $("#hunger").text("Hunger: " + hunger);
    } else {
        hunger--;
    $("#hunger").text("Hunger: " + hunger);
    }
    
    

});

$("#quiet").on("click", () => {
    
    sleepy = 0;
    $("#sleepiness").text("Sleepiness: " + sleepy); 

});

$("#fun").on("click", () => {
    if (bored < 2){
        bored = 0;
    $("#boredom").text("Boredom: " + bored); 
    } else {
        bored = bored - 2 ;
    $("#boredom").text("Boredom: " + bored); 
    }
    

});

//========= death scenarios ==============
function death() {
if (hunger >= 10 || sleepy >= 10 || bored >= 10){
    alive = false;
    $("#fun").text("You killed him!");    
    $("#quiet").text("You killed him!");
    $("#feed").text("You killed him!");
    $("#hunger").text("You killed him!");
    $("#boredom").text("You killed him!");
    $("#sleepiness").text("You killed him!");
    $("#age").text("You killed him!"); 
    $("#nameDisplay").text("You killed him!"); 
    $("#commentButton").text("You killed him!");
    $(".shake").attr("class", "dontShake");
    //next two lines were giving me trouble. If somehting seems off, try commenting out those lines
    $("#age").off(); 
    $("#nameDisplay").off(); 
    
   
    
};
};

//=========user input ===========
//this section from Dalton Justis-Hart

document.querySelector("#commentButton").addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    const userInput = document.querySelector("#commentInput").value;
    const newComment = $('#nameDisplay');
    newComment.text("Your pet's name is " + userInput);
    document.querySelector("#commentInput").value = "";
});


// ======= evolve character =====

 function evolution() {
     if (age === 5) {
        $(".shake").attr("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhASFRUQFRUVEBUVEhAVEBUPFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFysdFx8tLS0rLSstLS0tLS0tLS0tLS0rKy0tLS0tLS0tNystLS0rKy0tLS0tNy0rLS0tNy0tLf/AABEIAL8BCAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADgQAAEDAwMDAQYGAAUFAQAAAAEAAgMEESEFEjFBUWFxBhMigZGhFDKxwdHwQlKCkuEjYnOy8RX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQACAgICAgMAAwAAAAAAAAAAAQIRAyESMQRBEzJRFCKR/9oADAMBAAIRAxEAPwCn1NvKyWoNytpqTcLIak3KqyAlGmY0tGmYwsZjkSaiSsITcapEkwzUxGgNTEaohGO0XK0dEs7SHK0VEVVEvZbRIjwhwlFcihhdwQSEw5BITgRNqkvMClZcuQ6IECpMXiF1ikUDMCnZcYFKyASNlxTsvWWMDK9ZSIStXIWpJypWPBW6DkKJChBLuCLZGLtWCSpgXNQnNTRQyEwBcsUS1HKgSFjAHNQ3NR3OCE6QLBAuavLz5QvIBKHUBhY/VW5WyruFk9WasTKdiZYl28phhWMxuApuMpOIpqNyrFEpDTUxElWlMxKiJsepuVf0TsLPQFXVG9URN9l9A5Hc5V0EiYL0RghKG5cBXnJ7BQWNTUI0UrlyHRAg9dYF1yl7ohu62Ple3ooNpdlVFvoMwIm1CidfhFTGIkLll0ryBiJCFPHcIril5pwAkk1Wx4J3oQa7Y6yO6pVZVzXN1Ay4XNiybo6c0NWWTqryhOq1WGVDc8rp5HLRZOq0F9Yq9zihOJWsNDr61AfWJVwKG5hQsNBpKsryVdEV5azUN1QwsxqsRK1kjLhVtVR3VCRjW0xumY6QrQs07wmotO8LUAoIaMpyGiKvotP8JuOg8KiYrRQx0R7JyKiV3HR+EdlL4R5A4FRFR+FYQQWTraZGZCtzBwBRMVjBQl7C5pFx/hvk+iAI0zTSbTe/qlc2+h4xSexQNzYggjkHlE2K5fTRzC/UcOHI9e6qquN0Js8YPDhwVJ+S4fdFl4yn9GcY1Tsi0kW7kW8pn3duApy8pPoePjNditPFucB9fTqo1L7m/nHTA9VYwM2tc89Rtb57lZvW6nbG42z0O61ja9yEqk57LwxqOh2nmDiQOR9wmRKFjvZSvcagNJJDr9Ljjp5Wk1Ylkji38pyPlg/cFCU3CNoaeKMpUPb0N1QB1VW2tuFGa5F+Ao/ym1pAXjJPbGJ65Vk9VfChIUrIey5J5pS7OuGKMeiUr7piliuFXOkVlQVA4VPHkuRLyI60E/Cr34ZPKJXpHniZplB1OnHFCcVjCpgCgYAmCoFYws6ILqk5eWMejapGAFdj4Q56iyoSDspwiiNqpnaj5XP/ANLysYvhtRWWWci1Dc4C/K1NFBdt1jIHfwu+88I7oVERhCxqBiUorbqbY0VrVrNQEhLSVNuU+9qp6xuUUBov9EqSTYXsf1VxVRtc3a4XyCPULL+z79rwd2Ovey1L3dPVR8jqi2DsWc3FuAuQi5t0F7nuVETjdbsD9eijTOO0Hqee2eVwx2zsekGlcMAnA4HRUNdRDa43wQcWBN+Ra/VXEzd3y5QzTEmy6ItxJ2ZSRoZW05Y8svsjsBy45tbwBz0utJq7byEdAflnJ+9z80xLojDZ1wHMcHNda7g4W/WynqVjkkXTyfJUBy2Z2Khs77pupi+FPMjxwlat3Tqo/GooZTcmUNQOnVAfGQE3WAjKTjlvgrkktnVF6K2ZpRaKWzk0+MZSjm2cEI6YXtGkjOAur1M27QV0herF6PLlpgnIbgjOCg4JhRchQcEdyG5YwB4XlJy8sE8eFT6jPZXI4Wf1hvKqQKGq1CxQRqPlIV4ygxhKZsvtPr/+o31X1nRJA5o8r4nCLEHsvqvshW7mNyqxWhOWzRyxpF+CrZ4vlVtWyym0WQMORA9LNKIClGDbkjWxdU0CuSC4Ws1CtABcfwti2nuwd/8AhY6H4XehVnqftFLBNBdpdFODgNBDSL8u6YBWlDm6BGXBWW1PQEP8FGbG0MI4u45NlaNALQ4dcj0OVg/byN75WtANhGdp2udG2S4ILwOhFxfpdJjwLos8rls0bg0DDgT4PZBkr42jLwD+6oPY+jc0OmmFw2FrHOs4NkmvktB5sAM9brogZLIbsFh0PCl5EeElGLHwNTVyVBJ9caSbSfufVCgrQ84JPyUqzS4mZDW+gsu0FIG5ta/RQhCd7ZaU4cdFrHwlKgWv/SmwUnWO7BdElohHsqa1viyqJsH1V5UG/Kpa6EjIyuHItnZBk4xcJSowUSK9lGS46IJWa9mj0rLAivhQ9HB2hWTl6OP6nDkX9iqkbZBcn6wYuq5705Mg9DK8+VBdMFrCdcvIL5gvLGoNHwqbVm8q4iKrNUCqQMNqTcpWJPaq3KQiRROTHY1rvYut2u2ErHMKsdLqSyRrvKpHTJtn22lfdqHVx3CR0Sq3NHlW0jbpZqmdEHaKI8qTSpVTLFCaVHoqHBXbqAK6sEBM3N1dab7udggmbccNO4hwvyLjoqqQXClREbhzzc27DrdMhXo2rGBgDAcNFgOwGAF6lia747euOiqPaCpexjpI/ja4XFuAT362RdOqdsbWmQOIA3EcF3WwCF7oo41FSsPrIafhAN/ss1LEI+pH3yretmLzZp457KnqnOB4PNu4UZqN2PBuqONN8/umIwk/xPF/r/K66oti6CpGdlgElXSqDp3IT5d2CcrS2gxVMQe83uRbsgGTPhMVdKDwTfwUrBTBv5slcU4uzri00CqJB0Qo5N3RHqWd7LlPtBVY42Tc0X2nmzRdMulVUKwAcrjawHquqKpUc0tsekfdUVXNYkK/hyFmdeaWuRkBbBPqUF06VBK5ZJY9BJam2SuKo1qawDR1XlOU6Yyx2bCEpPUhhMwFC1AYXacJh9WblVUau9XYqZgQuhWrGIyjNKEwIzQm5k+J9D9jK/cwDstzG64uvknsnWbJNvdfUtPluE7fJWNDWgeoRdVWhXtSy4VJK2xUZHREk0qSG1T3JRiVlFvO0cdfJ9V4OQ/eWz/eqKYGi0im3AgnHHhE92MWA8YVVDUWH1Vnp81yLC5+yM2qNBOy2ghLRcs+ip9TrAHbdlr9VeTam1jbuPHNgVnaqvjmJAIyMd+6hp9SLpP2jPVznF424sc/wp2N+V6qfY26oLJEqGbLEuPCUqGuLsXHlTEycpZAcJkkxbo41gay45VbSUcjn7+Ae/7LTxaWCASiSwBowEjxW99DrLS12Y3VL7lX3N1Z6g34yltiYUVc890xp1y9cMaJSts4FZPZmtGop24VN7Rw3F1e0rbtSGsAbSFaS0SXZkC1caEd7UtUP2tcewUSpnNXcS8nsvLkkzXdcleXM9sutG2hcpVnCVhkR6g4Xoo81mU1dvKohytBqvVZ93KSTAMMRmpZjkZr0LBQ9RybXtd2K+qaBVbmtPcL5EHrdex9ddoHZVxS9Ctbs+hjIVPXR2KsIqgWVbqlSFpukWghXehvnSMlQgueSoOZZQHZKpC/EX+aV2qbGpeTH4oYbIbLQaI0kXJWdatfoMJ2XNkJPRkkG1ObbHbZcHzlYamYzedwLXk+VvdXZ8OLfusnqTA5zSBxyeoSSjdD45VaEatuV6NiIR3UXJhQlk1pcd3pPdZW2jU5tvTwWxZOkaKPiyVr/wApRo3pbVPynKsyKMlVi7il9qPK8XQHyrnZdESFEusouuhPabcoBL/T9UbaxPCS1bUA7DSqGWS3J+6l7wW5T821QvGnZ17lT69WbY3Dumpawk7Y27rfmP8AhHi/dV2qUsj252j0SG5fhmYJ/iv2Xkz+BsV5Loe2bSlmunpHfCs3Q1KumS3au2cXFnBCSkin1Tqs7JytFqWbqiNI4nhRkx0iDSmImE8BN0umHqrelomhJyHWJsr6TTXOWr0WgMahRsA6K7pxhMpDrGkH/EOtZI1DieSmpXgKvmnvwlkykVR4NXHusotuV7apjnWklGYxDBU4yTwiYapotzgB1K3FO3a0NA4CrvZrRRtEr+TxY4srydrRjra/y6/qq/G2iPNJldWyi2T6rIajMS4gdforPWZC1zgHGz/1VA6Rwbe253QJNrQ9InHj82FGWp6NF/KSFLI92+R2OjRwiTzbRZpA89VghGA8uP8AK02ny7Yx2WPEluTcosuoT7A2MDwT2TRkkLKNmypqsOJ8GyHW1gMRN+h6rEQuqS43msXcta3Pa/8Ayu+5EQL5ZyAbn4n2bf8AQ+gW+Qzgltk3VAJOSibz0afVVb9VLgGwx3Jtd72ua23gfmd9EQipeMybf/HGB93k/okcjJ/iscfI7qLeVS6nXBjS4PaSOBuGU6zSd2ZXOfn/ABuc4f7b7fsus02LJ9231DW2+WPuhY1SKGKr940XbI487WtNvqU2PfPFtgjb63kt+gV/CxovtAA6duRx9PuoPZYZza/Xob9PQrWbi/bK2CINAbgW7LszBb1wPJ6pot5v9R63/cpVtz/egWClQg6DwP8A6vKxc3tbvwvIBMxQNeTgH9loIGEDKOxjW4wPRce6/wDcrpy+Q59I5cXjKHsBJHdRZCAvTSsB+I56Dl30C613hc7Z0qKQRtkeI9kvHymGEjnCAR6GQNyU5FWE4a0qtjF/KsIL9kyYKD+6Jy4koUmOiJMbZL7d/wDlCa08AW7k3/fKDCCcfKnG0np8yjtZYW5N7j1/ZcLbmzrkduBfyP5JQMRYwX53f+oTDXen7ILYb9TboOAPomI4QPlx0H0/dFGNXRa3FHC3e4AsFiDfCz2q+2gddsIdxbcQQ2/jCkZTts1ocT1cbM+fdIz6a12ZHe8P+UAMiH+kfm/1EqjyOhI40IQ10kouLuzl5I2nvbwuvL+pGO3KYnmjjwXADsLcdrJA6rfEcbnHuRZqjzbHfFew7oDy5+O182XGwsA7epHHlJOM78lzWeALkBej0wON3lzz3eTb6cLWC36QSTUadmNxeb8MBd+iC/VZHYjpz4MhAHg2FyjOjYwhgAJPQCw+ytGwADDVmwKMn2/8KKGnq5HAe8bGDYksb8X+518pxns9G0bnF0jyeXfE61+bnhWsRAx259V0PIvc8/YIWMsce+xb8K0OO0W7nrdClp/+82834RXE90Gd1gSeiBTo5E0Hra17fypObg5StBNuBPTojveiBkS9R3C3yUXuQ3FMKAmfm3RdjbbNlNsfUqVlgAHLqk4LyJhQyYuCP2+qFtc4ZdYH/Lcfc5PyRmgEZJ/ZS+Ef3CBqFYaYDAbyb3z9+5RwwdT8h/Km6W/X6LzG38BYJ1je39+aLG1cB+yFJUAeSgYsIngevdFdOTho+eT9AquAl2XYCbfqTYm2bk/VEDZaMZtsXHJ9Nw+fT5IM1VyAL+Aqg1z5MnC7+IcB8IWYvJFwZLC7jt7rkVay192Fn5N7/wAxwjU9Gb5OEDW36Ld+qMHlCfq7jhjPqoMph/lTDIljU/0BE6V/5n7R2ChNp8rjZszhflWMcQTcTEA8F7Kmn0kN5+I9zkpttLZWO3uhznCWiiSXQq1gCWrqgMGOVGorAOOUnGwyOueEyAwmmUxc73rueiut6TaLYHRGsUG7ClR1T2rjQpb0BhaRVepT3+EK1qThU4h+K5RiwMZp49rQF1xXJZbYSskqKA+ghcu7koJF0yp6EGd64SgNciXQMdK8oly8sESaie4BySq8VVkKWsPRYVyLUOa1AlrQOFWxucUPab5RolKcrpDX40u9FNtQhx0905FTAIWPTYJsjimoafqSiBoUmsutYVAnGAOAiNYSiRQI4agOkiMUACO0KIU2pQ0EBCm0qFlNoRMEYmGFAC6X2TIVh5JbKtq6m+F6qlSjcnKDGQL3JcU9A22AugBFZZK2MTC6JFCVyCHpbMNOeh71EOQ3OWCEkddJy4RSVBzVkYRfcqJYU0WKWxOmK0IGMrzY029qgAm5C0cYxdIXSVElazHrLy5deQMf/9k=");
     }      
 };

