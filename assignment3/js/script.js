//The first thing i want to do is make a function that will deal with the checkboxes
let output = document.getElementById("final-pizza");
let pizzaSize;
let pizzaCheese;
let pizzaType;
//the reason why toppings is being declared outside the built function is because we want to be global so that we ccan use the chooseTopping function 
let pizzaToppings = document.querySelectorAll('.toppings input[type="checkbox"]');
let btn = document.querySelector("#btn");
let finalPizza = document.querySelector("#final-pizza");
let checked = [];//checked is whwere we will store the values of the checkboxes

class Pizza {
    //I have 4 parameters for the pizza class size, type, toppings, and cheese
    size;
    type;
    toppings;
    cheese;
    constructor(size, type, toppings, cheese) {
        this.size = size;
        this.type = type;
        this.toppings = toppings;
        this.cheese = cheese;
    }
}
//Build pizza makes

function build() {
    console.log("the pizza is being built");
    // Grabbing the values from the form
    pizzaSize = document.querySelector('input[name="pizza-size"]:checked');
    pizzaCheese = document.querySelector('input[name="cheese"]:checked');
    pizzaType = document.getElementById('pizza-type');

    // Debugging logs
    console.log("Pizza Size:", pizzaSize ? pizzaSize.value : "Not selected");
    console.log("Pizza Cheese:", pizzaCheese ? pizzaCheese.value : "Not selected");
    console.log("Pizza Type:", pizzaType ? pizzaType.value : "Not selected");

    // Calling the valid function before we make the pizza
    if (valid()) {
        let pizza = new Pizza(pizzaSize.value, pizzaType.value, checked, pizzaCheese.value);
        output.textContent = `You have ordered a ${pizza.size} ${pizza.type} pizza with ${pizza.cheese} cheese and ${checked.join(", ")} toppings`;
    }

}
//the reason why we have event as a parameter is because we want to see which checkbox is being checked so that we can remove the fourth selected option since we only at most 3 toppings
function chooseTopping(event) {

    //Ressetting the checked array each time the function is run to see what values need to be added
    checked = [];
    //looping through the toppings and checking if they are checked
    for (let element of pizzaToppings) {
        if (element.checked) {
            checked.push(element.value);
        }
    }
    if (checked.length > 3) {
        alert("You can only have 3 toppings");
        event.target.checked = false;
        checked.pop();

    }
}
function valid() {
    // Resetting output each time the function is run
    output.textContent = "";
    if (!pizzaSize) {
        output.textContent += "Please select a size\n";
    }
    if (!pizzaCheese) {
        output.textContent += "Please select a cheese\n";
    }
    if (!pizzaType) {
        output.textContent += "Please select a type\n";
    }
    if (checked.length == 0) {
        output.textContent += "Please select a topping\n";
    }
    // I want to tell people 
    if (!pizzaSize || !pizzaCheese || !pizzaType || checked.length == 0) {
        return false;
    } else {
        return true;
    }
}
//Adding the event listener to every checkbox for the pizza toppings
for (let element of pizzaToppings) {
    element.addEventListener("change", chooseTopping);
}
//Adding the event listener to the button
btn.addEventListener("click", build);

