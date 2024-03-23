#! /usr/bin/env node
import inquirer from "inquirer";
/*first target is to make the program choose a random number -done
   next a user should be able to guess and select a number -done
   then both numbers should be compared to see if the user guessed correctly and a result should be shown -done
*/
//const randomNumber = 7; (this code is for when you want a fixed number choosen by the computer)
const randomNumber = Math.floor(Math.random() * 9 + 1); /*here floor removes the decimal from random number, 9 indicates that
    it can choose number from 0-8 and +1 will add 1 to any number generated
    from 0-8 hence the output will be from 1-9*/
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "kindly guess a number from 1 to 9: ",
    },
]);
if (answer.userNumber === randomNumber) {
    console.log("Congratulations! You guessed Correctly");
}
else {
    console.log("you guessed the wrong number");
}
