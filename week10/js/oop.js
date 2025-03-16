const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name){
    let obj ={};
    obj.name = name;
    obj.greetings = function(){
        alert(`Hey,  this is ${this.name}`)
    };
    return obj;
}
/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Default");
/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interests = interests;
    this.bio = function(){
        return `The interests pf ${this.firstName} ${this.lastName}, of age ${this.age}, are ${this.interests}.`;
    }
}
/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
let person2 = new Person("Jamari", "Charles", 20, ["Video games", "Drawing", "Skateboarding"])
/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()
output.textContent = person2.bio();
/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();
/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";
car.colour = "white";
car.fun = function(){
    alert(`You got the ${this.brand} ${this.model}, in ${this.colour}.`);
}

let anotherCar = Object.create(car);
anotherCar.model = "Accord";
/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

