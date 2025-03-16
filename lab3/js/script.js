// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
let output = document.querySelector(".output");
class Burger{
    bunType;
    vegetables;
    cheeses;
    sauces;
    burgPatty;
    pattyQty;

//Constructor for the burger
constructor(bunType, vegetables, cheeses, sauces, burgPatty, pattyQty){
    this.bunType = bunType;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.burgPatty = burgPatty;
    this.pattyQty = pattyQty;
}


desc(){
    
   
    return `You got a ${this.bunType} burger with ${this.pattyQty} ${this.burgPatty} patty(ies), ${this.vegetables}, ${this.cheeses}, and sauces: ${this.sauces.join(", ")}.`;
}
}

jamariBurger = new Burger("sesame seed", "no veggies", "swiss cheese", ["ketchup", "mayo"], "beef", 2);

output.textContent = jamariBurger.desc();

