const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    size;
    isDecaf;
    qtySugar;
    qtyCream;

// create constructor with keyword
constructor(size, isDecaf){
    this.size = size;
    this.isDecaf = isDecaf;
    

}
// add a serveIt method
    serveIt(){


    // Generate an IMG of the coffee ordered
        let cup = document.createElement("img");
    // Set the src path for the IMG element
        cup.setAttribute("src", "../images/coffee-cup.svg");
    // Determine caffeine status of the coffee
        if(this.isDecaf){
            cup.setAttribute("src", "../images/coffee-green.svg")
        }else{
            cup.setAttribute("src", "../images/coffee-green.svg")
        }
    // Set the size of the cup SVG image based on this.size
        switch(this.size){
            case "small":
                cup.setAttribute("height", 100);
                cup.setAttribute("title", "A small sized coffee")
                break;
            case "medium":
                cup.setAttribute("height", 150);
                cup.setAttribute("title", "A medium sized coffee")
                break;
            case "large":
                cup.setAttribute("height", 200);
                cup.setAttribute("title", "A large sized coffee")
                break;
            default:
                cup.setAttribute("height", 150);
                cup.setAttribute("title", "A medium sized coffee")
        }
    // Size the IMG in terms of its height based on above number from the switch

    // Generate a description of the coffee and put it into the 
    //IMG title attribute

    // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    // Output all object member values

    }
}


/* STEP 2: Instatiate a coffee based on the 
above constructor function */

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
let jamariCofee = new Coffee("small", true);
/* STEP 5: Define a subclass of the Coffee class */
jamariCofee.serveIt();
/* STEP 6: Create a new instance of the Latte object */
class Latte extends Coffee{
    milkType;
    constructor(size, milkType, isDecaf){
        //The super keyword calls the constructor for the parent so you don't have to do the same thing over and over for 
        super(size, isDecaf);
        this.milkType = milkType;

        

    }
    lateDesc() {
        alert(`A ${this.size} sized Latte with ${this.milkType} milk`)
    }
}
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */
let priyanshLatte = new Latte("large", false, "oat milk");
/* STEP 8: Create yet another instance of Latte using the console, 
and try the latteDesc() method from the subclass, as well as the serveIt() method 
from the parent class */

/* Class Exercise: Using the coffee.html file, create a new constructor for a different type of coffee (like an Americano, Espresso or ???). 
Based on this new coffee on the Coffee object. 
Use the steps we followed to create Latte as your guide.*/

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG