// constants for query selector
const btnCustom = document.querySelector(".custColor");
const btnRandom = document.querySelector(".randColor");
const studId = document.getElementById("myStudentId");
const colorNum = document.getElementById("customNumber");
const imgDisplayed = document.getElementById("images");
const imgSelect = document.getElementById("imageSelect");
const images =["../images/img1.jpg", "../images/img2.jpg", "../images/img3.jpg", "../images/img4.jpg", "../images/img5.jpg"];

// function to change bg color from user input and add student id
function changeCustomColor(colorValue) {
    
    // console.log(`Color: ${colorValue}`);
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
    studId.textContent = 10;
}

function convertValue(){
    let colorvalue = Number(colorNum.value);
    changeCustomColor(colorvalue);
}

// function to change bg color from random no.
function changeRandomColor() {
    let randomColor = Math.floor(Math.random() * 111) - 5;
    changeCustomColor(randomColor);

}

//I'm going to make a variable called firstCall that removes

// function to generate options for select list
function addList() {
    
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    if(imgSelect.childElementCount <5 ){ 
        //This if statement is checking 
        if(imgSelect.childElementCount == 1){
            imgSelect.remove(0);
        }
        for(let i =0; i <images.length; i++){
            const imgOption = document.createElement("option");
            imgOption.value = i+1;
            imgOption.text =  `Image ${imgOption.value}`;
            imgSelect.appendChild(imgOption);
           }
    }
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    
}

// function to change image
function changeImage() {
    console.log("the change image function has been called");
    
    //Subtracting 1 from the value to get the index of said image src from the images array
    let imgIndex = imgSelect.value -1;
    console.log(imgIndex);
    imgDisplayed.setAttribute("src", images[imgIndex]);

}

// event listeners for on click event of buttons and select
btnCustom.addEventListener("click", convertValue);
btnRandom.addEventListener("click", changeRandomColor);
imgSelect.addEventListener("click", addList);
// event listeners for on change event of select
imgSelect.addEventListener("change", changeImage);