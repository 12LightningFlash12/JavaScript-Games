var guesses_made = 0;

var name = prompt("What is your name?");

var number = Math.floor(Math.random() * 11);

console.log("Hello " + name + " I am thinking of a number from 0 to 10.");

while(guesses_made <= 6){
    var guess = prompt("Take a guess: ");
    
    if(guess < number){
        console.log("Your guess is too low.");
    }
    
    if(guess > number){
        console.log("Your guess is to high.");
    }
    
    if(guess === number){
        
        break;
    }
    
    guesses_made += 1;
}

