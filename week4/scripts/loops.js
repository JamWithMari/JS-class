var courses = ['Intro to Programming', 'Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence'];

var courseList = "My courses this term are:";

var msg = document.querySelector('#courses');

msg.textContent = courseList;

for (let i = 0; i < courses.length; i++) {
    // STEP 1b: Add a conditional for the last item in the array so we can finish the sentence with a period.
    if (i === courses.length - 1) {
        msg.textContent += `and ${courses[i]}.`;
    } else {
        msg.textContent += `${courses[i]}, `;
    }
}

var cities = ['Toronto', 'Vancouver', 'Calgary', 'Edmonton', 'Halifax'];
var result = document.querySelector('#searchResult');
var input = document.querySelector('input');
for (let i = 0; i < cities.length; i++) {
    /* STEP 2b: Build an IF/ELSE conditional that compares
    searchName with cities[i] */
    if (searchName === cities[i]) {
        result.textContent = "Your city is present in the list.";
        break;
    } else {
        result.textContent = "Your city is not present in the list.";
    }
}

var numberList = document.querySelector('#numberList');
var num =50;

for( let i =1; i<=num; i++){
    // STEP 3b: Use the modulus operator to determine if the number is even or odd
    if (i % 2 === 0) {
        numberList.textContent += `${i} is an even number.`;
    } else {
        numberList.textContent += `${i} is an odd number.`;
    }
}

i = 0; // initializer
var outputWhile = '';
/* STEP 4a: WHILE loop to iterate through the cities array
(created above in STEP 2) */
while (i < courses.length) { // condition part
    if (i === courses.length - 1) {
        outputWhile += `and ${courses[i]}.`;
    } else {
        outputWhile += `${courses[i]}, `;
    }
    i++; // increment/decrement
}
console.log(outputWhile);