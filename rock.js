function computer(){
computer_choices = ["rock", "paper","sciccors"];
choice_comp = Math.floor(Math.random() * 3);
computer = computer_choices[choice_comp];
return computer; 
}

user_input = prompt("rock , paper, skiccors")
if(user_input == "rock" && computer_choices == "rock"){
    console.log("its a tie")
}
if(user_input == "rock" && computer_choices == "paper"){
    console.log("its a you lost")
}

if(user_input == "rock" && computer_choices == "skiccors"){
    console.log("its a u won")
}
if(user_input == "paper" && computer_choices == "paper"){
    console.log("its a tie")

}
if(user_input == "paper" && computer_choices == "sciccors"){
    console.log("its a you lose")
}
if(user_input == "paper" && computer_choices == "rock"){
    console.log("you win")
}
if(user_input == "sciccors" && computer_choices == "sciccors"){
    console.log("tie")
}
if(user_input == "sciccors" && computer_choices == "rock"){
    console.log("you lose")
}
if(user_input == "sciccors" && computer_choices == "paper"){
    console.log("you win")
}