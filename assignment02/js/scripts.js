// constants for query selector
const btnCustom = document.querySelector(".custColor");
const btnRandom = document.querySelector(".randColor");
const studId = document.getElementById("myStudentId");
const colorNum = document.getElementById("customNumber");
const imgDisplayed = document.getElementById("images");
const imgSelect = document.getElementById("imageSelect");
const images =["../images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg"];

// function to change bg color from user input and add student id
function changeCustomColor(colorValue) {
    //changing the background colour depending on the 
    if (colorValue < 0 || colorValue > 100) {
        document.body.style.backgroundColor = "red";
    }else if (colorValue > 0 && colorValue <= 20) {
        document.body.style.backgroundColor = "green";
    }else if(20 <colorValue && colorValue <= 40){
        document.body.style.backgroundColor = "blue"; 
    }else if(40 <colorValue && colorValue <= 60){
        document.body.style.backgroundColor = "orange"; 
    }else if(60 <colorValue && colorValue <= 80){
        document.body.style.backgroundColor = "purple"; 
    }else if(80 <colorValue && colorValue <= 100){
        document.body.style.backgroundColor = "yellow"; 
    }
    studId.textContent = "Student ID: 1219278"
}

function convertValue(){
    //In the funciton we're taking the value of number inputed form the user and passing it inot the changeCustomColor function
    let colorvalue = colorNum.value;
    changeCustomColor(colorvalue);
}

// function to change bg color from random no.
function changeRandomColor() {
    //this function generates a random number between -5 and 110 so we can get a red background more easier
    let randomColor = Math.floor(Math.random() * 111) - 5;
    //We then take the generated number and pass it into the changeCustomColor function as the parameter
    changeCustomColor(randomColor);

}

//I'm going to make a variable called firstCall that removes

// function to generate options for select list
function addList() {
    
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    if(imgSelect.childElementCount <5 ){ 
        //This if statement is checking to see if the other options haven't been generated yet then it deletes the first element
        if(imgSelect.childElementCount == 1){
            imgSelect.remove(0);
        }
        //The for loop generates options element for every element in the images array
        for(let i =0; i <images.length; i++){
            const imgOption = document.createElement("option");
            //I increased the option value by one just to make it more dynamic for the 
            imgOption.value = i+1;
            imgOption.textContent =  `Image ${imgOption.value}`;
            imgSelect.appendChild(imgOption);
           }
    }
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    
}

// function to change image
function changeImage() {
    
    //Subtracting 1 from the value to get the index of said image src from the images array
    let imgIndex = imgSelect.value -1;
    //Then we can take image index at set it ass the source of the image using the images array
    imgDisplayed.setAttribute("src", images[imgIndex]);

}

// event listeners for on click event of buttons and select
btnCustom.addEventListener("click", convertValue);
btnRandom.addEventListener("click", changeRandomColor);
imgSelect.addEventListener("click", addList);
// event listeners for on change event of select
imgSelect.addEventListener("change", changeImage);