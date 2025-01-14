console.log("connected");
let variables = document.querySelector("#things");
variables.addEventListener("click", color);
function color(){
    variables.style.color = "blue";
    variables.style.scale = 1.2;
    console.log("you have now changed the colour to blue")
}