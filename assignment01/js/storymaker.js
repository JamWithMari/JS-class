// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const button1   = document.querySelector('#noun1');
const button2   = document.querySelector('#verb');
const button3   = document.querySelector('#adjective');
const button4   = document.querySelector('#noun2');
const button5   = document.querySelector('#setting');

// Constants for p tag to display query selectors
const button1Text = document.querySelector('#choosenNoun1');
const button2Text = document.querySelector('#choosenVerb');
const button3Text = document.querySelector('#choosenAdjective');
const button4Text = document.querySelector('#choosenNoun2');
const button5Text = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const storyText = document.querySelector('#story');
// Variables for pre-defined arrays
var noun1Array = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My teacher', 'The Elephant', 'The Cat'];

 var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];

 var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];

 var noun2Array = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];

var settingArray = ['on the moon', 'in the jungle', 'in the kitchen', 'in my backyard', 'in the basement', 'in the attic', 'in the park'];


// Variables for count to grab array elements

var noun1Counter = 0;
var verbCounter = 0;
var adjectiveCounter = 0;
var noun2Counter = 0;
var settingCounter = 0;

/* Functions
-------------------------------------------------- */
// for each button function the if statement will run for the length of the array and then reset the counter to 0
function noun1_on_click() {
    // variable to get array element and displaying it
    button1Text.textContent = noun1Array[noun1Counter];
    // if-else to change count setting
    if(noun1Counter < noun1Array.length - 1) {
        noun1Counter++;
    } else {
        noun1Counter = 0;
    }
}

function verb_on_click() {
    // variable to get array element and displaying it
    button2Text.textContent = verbArray[verbCounter];
    // if-else to change count setting
    if(verbCounter < verbArray.length - 1) {
        verbCounter++;
    } else {
        verbCounter = 0;
    }
    
}

function adjective_on_click() {
    // variable to get array element and displaying it
    button3Text.textContent = adjectiveArray[adjectiveCounter];
    // if-else to change count setting
    if(adjectiveCounter < adjectiveArray.length - 1) {
        adjectiveCounter++;
    } else {
        adjectiveCounter = 0;
    }
    
}

function noun2_on_click() {
    // variable to get array element and displaying it
    button4Text.textContent = noun2Array[noun2Counter];
    // if-else to change count setting
    if(noun2Counter < noun2Array.length - 1) {
        noun2Counter++;
    } else {
        noun2Counter = 0;
    }
    
}

function setting_on_click() {
    // variable to get array element and displaying it
    button5Text.textContent = settingArray[settingCounter];
    // if-else to change count setting
    if(settingCounter < settingArray.length - 1) {
        settingCounter++;
    } else {
        settingCounter = 0;
    }
    
}

// concatenate the user story and display
function playback_on_click() {
    //once the user clicks the playback button, the story will be displayed in the p tag
    storyText.textContent = `${button1Text.textContent} ${button2Text.textContent} ${button3Text.textContent} ${button4Text.textContent} ${button5Text.textContent}`;
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    /*inorder to get a random element from the array, we will use the Math.random() function to get a random number between 0 and the length of the array*/
    //This way we can get a random index from the array and display it
    let randomNoun1 = noun1Array[Math.floor(Math.random() * noun1Array.length)];
    let randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
    let randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    let randomNoun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)];
    let randomSetting = settingArray[Math.floor(Math.random() * settingArray.length)];

    //once the user clicks the random button, the story will be displayed in the p tag
    storyText.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    
}

/* Event Listeners
-------------------------------------------------- */

button1.addEventListener('click', noun1_on_click);
button2.addEventListener('click', verb_on_click);
button3.addEventListener('click', adjective_on_click);
button4.addEventListener('click', noun2_on_click);
button5.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
