//The first thing i want to do is make a function that will deal with the checkboxes
let output = document.getElementById("#final-pizza");
let pizzaSize = document.getElementById("#pizza-size");
let pizzaType = document.getElementById("#pizza-type");
let pizzaToppings = document.getElementById("#pizza-toppings");
let pizzaCheese = document.getElementById("#pizza-cheese");
class Pizza{
    //I have 4 parameters for the pizza class size, type, toppings, and cheese
    size;
    type;
    toppings;
    cheese;
    constructor(size, type, toppings, cheese){
        this.size = size;
        this.type = type;
        this.toppings = toppings;
        this.cheese = cheese;
    }
}
//Build pizza makes
function build(pizza){
    //Making sure the form is finished
}

//Want to add an event listener to the select element to grab the value of the selected option

//want to add an event listener to checked options in the checkboxes this way i can make 