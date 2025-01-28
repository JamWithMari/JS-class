var output = document.querySelector('body p:nth-of-type(2)');
//Step 1a: A simple if|else statement
var homeWorkDone = null;
var cofeeTime;

if(homeWorkDone == true){
    //run this block if the condition is satisfied
    cofeeTime =20;
}else{
    //run this block if the condition isn't satisfied
    cofeeTime =5;
}
output.textContent = `You will get a break on ${cofeeTime} minutes`;
//Step 1b: Any value that is not false, undefined, null, 0, NaN, or 
//an empty string will evaluate to True when tested using a conditional statement
var page = document.querySelector('html');
var select = document.querySelector('select');
var icon = document.querySelector('#weatherIcon');
var temp = document.querySelector('#temp');
var comments = document.querySelector('#commentary');
var comments2 = document.querySelector('#commentary2');

// step 2a: add an event listener for the 'change' event in the setWeather() function below

select.addEventListener("change", setWeather);

function setWeather(){
    console.log("Inside the function");
    var choice = select.value;
    var temperature = temp.value;
    console.log(choice);
    console.log(temperature);
    if (choice === "sunny" && temperature >= 15) {
        // change the icon to sunny
        icon.setAttribute("src", "images/sunny.svg");  
    } else if (choice === "rainy") {
        // change the icon to rainy
        icon.setAttribute("src", "images/rainy.svg"); // <img src="images/sunny.svg" alt="" id="weatherIcon" width="50" height="50" />
    } else {
        // change the icon to windy
        icon.setAttribute("src", "images/windy.svg"); // <img src="images/sunny.svg" alt="" id="weatherIcon" width="50" height="50" />
    }
}

if (choice === "sunny" && temperature < 15) {
    comments.textContent = 'It is ' + temperature + ' degrees outside - that\'s a bit cool.';
    // STEP 4b: AND, once again - &&
} else if (choice === "sunny" && temperature >= 15) {
    comments.textContent = 'It is ' + temperature + ' degrees outside — time to find your sunglasses!';
    // STEP 4c: OR - ||
} else if (choice === "windy" || choice === "rainy") {
    comments.textContent = 'The weather today is a bit dreary.';
}

//STEP 4 d: NOT - !
if (choice !== "rainy") {
    comments2.textContent = 'Oh Yes. It\'s not raining. Let\'s go!';
} else {
    comments2.textContent = 'It\'s a miserable day it\'s raining.';
}

var windSpeed = document.querySelector('#windSpeed');
var windComment = document.querySelector('#windComment');
function getWindSpeed(){
    var speed = Number(windSpeed.value);

    switch(speed){
        case 100:
            windComment.textContent = speed + ' km/h is a hurricane force wind.';
            break;
        case 80:
            windComment.textContent = speed + ' km/h is a storm force wind.';
            break;
        case 60:
            windComment.textContent = speed + ' km/h is a violent storm force wind.';
            break;
        case 40:
            windComment.textContent = speed + ' km/h is a gale force wind.';
            break;
        case 20:
            windComment.textContent = speed + ' km/h is a fresh breeze.';
            break;
        default:
            windComment.textContent = speed + ' km/h is a light breeze.';
            break;
    }
    
}

var breakMessage = document.querySelector('#breakTime');
var coffeeBreak = false;

cofeeBreak ? breakMessage.textContent = 'Time for a coffee break' : breakMessage.textContent = 'Keep working!';