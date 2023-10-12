const prompt=require("prompt-sync")({sigint:true})
var x = Math.random()*100
x=Number.parseInt(x)
let guesses = 10;
let a
while(a!=x && guesses!=0)
{
        a=prompt("Enter a number between 1 to 100....")

    guesses --;
    if(a>x){
        console.log("The number is greater than the original number:...")
        if(guesses==0){
            console.log("you exhausted your limit:....")
            console.log("the hidden number is",x)
        }
    }
    else if (a<x){
        console.log("lesss than the original number:...")
        if(guesses==0){
            console.log("you exhausted your limit:....")
            console.log("the hidden number is",x)
        }
    }
    else if(a==x){
        console.log("guess  is correct:...")
        console.log("Congrutulation.. your won the game ")
        console.log(`you guesses in a ${10-guesses} chances`)

    }
}

