var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");
var no_of_guess=0;
var guessed_num=[];

var  result=Math.floor(Math.random()*10);
console.log(result);

function play()
{
    var user__guess=document.getElementById("guess").value;
    if(user__guess < 1 || user__guess > 10)
    {
        alert("Please enter the number from 1 to 10");
    }
    else
    {
        guessed_num.push(user__guess);
        no_of_guess=no_of_guess+1;

        if(user__guess > result)
        {
            msg1.textContent="Your Guess is high";
            msg2.textContent="Number of Guesses:"+no_of_guess;
            msg3.textContent="Previous Guessed Number"+guessed_num;
        }
        else if(user__guess < result)
        {
            msg1.textContent="Your Guess is low";
            msg2.textContent="Number of Guesses:"+no_of_guess;
            msg3.textContent="Previous Guessed Number"+guessed_num;
        }
        else if(user__guess == result)
        {
            msg1.textContent="You are the winner. \n Congratulations.";
            msg2.textContent="The Lucky Number is:"+result;
            msg3.textContent="You Guessed:"+no_of_guess+" Guesses.";
        }
        else if(user__guess+1 == result || user__guess-1 == result)
        {
            msg1.textContent="Your Guess is near to secret Number";
            msg2.textContent="Number of Guesses:"+no_of_guess;
            msg3.textContent="Previous Guessed Number"+guessed_num;
        }
    }

    
}
