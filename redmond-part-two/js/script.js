
let name = prompt ("name your pet");
let happiness = 0;
let energy = 0;
let answer = 0;

for (let i = 0; i < 6; i++){ 

let answer = prompt ("feed, pet, or walk");


    if (answer == "feed") { 
            energy += 2,
            happiness += 0
        }

    else if (answer == "pet"){ 
            happiness += 1,
            energy += 0
        }
    
    
       else if (answer == "walk" && energy >= 1 ) {   
            happiness += 2,
            energy -= 1;
        }

        else if ((answer == "walk" && energy <= 0)) {
            alert ("Not enough energy to enjoy a walk."),
            energy += 0,
            happiness += 0
            i -= 1  
        }
}  
    
        console.log (name, "has", + happiness,  " happiness and", + energy, "energy.")
