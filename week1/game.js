// STEP 1: Initialize game variables
        
        // STEP 1a: Pick random number

        // Returns a random integer from 1 to 100:
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback

        // STEP 1c: Create variables to represent the guessing form
        let guesses =document.querySelector("#guesses");
        let lastResult =document.querySelector("#lastResult");
        let lowOrHi =document.querySelector("#lowOrHi");
        // STEP 1d: Create variables to initialize counter for number of guesses
        let userInput = document.querySelector("#guessField");
        let submit = document.querySelector("#submit");
        let count = 1;
        // STEP 1e: Create a variable to represent the game reset button
        const reset = document.querySelector("#reset");
            reset.textContent = "Reset game";
        // STEP 2: Put focus on the field that allows user to type in guesses
        userInput.focus();
        // STEP 3: Build a function to check the user's guess
        function checkUser() {
            // STEP 3a: Create a variable to contain what number the user entered
            reset.style.display = "unset";
            let userNum = Number(userInput.value);
            console.log(userNum);
            // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
            if(count === 1){
                lastResult.textContent ="Previous Guesses: " + userNum;
            }else{
            // STEP 3c: Add the user's current guess to that list, plus a space
                lastResult.textContent += " " + userNum;
            }
            // STEP 3d: Conditional - the user guessed correctly
            if(userNum === randomNumber){
                // Output a success message, then end the game
                guesses.textContent = "Congrats! You won.";
                lowOrHi.textContent = "";
                gameover();
            }
            // STEP 3e: Conditional - the user is all out of guesses
            if(count ===10){
                guesses.textContent= "Sorry! You are out of guesses";
                gameover();
            }
            // Output an appropriate message, then end the game

            // STEP 3f: Conditional - the user's guess is incorrect
            if(userNum !== randomNumber){
            // Output an appropriate message
                guesses.textContent
            // If the guess is too low, let the user know
                if(userNum < randomNumber){
                    lowOrHi.textContent = "Too Low!";
// Else if the guess is too high, let the user know
                }else if(userNum > randomNumber){
                    lowOrHi.textContent = "Too High!";
                }            
            }
            // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
            count++;
            // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element
            
        }

        // STEP 4: Build a function to end the game
        function gameover() {
            // STEP 4a: Disable the guessing field and submit button
            userInput.disabled = true;
            submit.disabled = true;
            // STEP 4b: Build a new button to start a new game
            // STEP 4c: Add a click event to the new button that calls resetGame function
            reset.addEventListener("click", resetGame);
        }

        // STEP 5: Build a function to start a new game
        function resetGame(){
        // STEP 5a: Restore the guessCount variable to 1
            count = 1;
        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop
            lowOrHi.textContent = "";
            lastResult.textContent = "";
            guesses.textContent ="";
            userInput.focus();
        // STEP 5c: Remove the reset button
            reset.style.display = "none";
            reset.removeEventListener("click", resetGame);
        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field
            userInput.disabled = false;
            submit.disabled = false;
        // STEP 5e: Change background color of lastResult paragraph back to white

        // STEP 5f: Generate a new random number
        randomNumber = Math.floor(Math.random() * 100) + 1;
        }
        

        // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
        submit.addEventListener("click", checkUser);