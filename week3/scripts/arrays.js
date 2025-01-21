/* STEP 1: Creating an array
	When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
    let myArray = [1,2,3, "four", "five", "elephant"];
    var output = document.querySelector('body p:nth-of-type(2)');

     

	/* STEP 2: Reading and changing array elements
	You can refer to a particular element in an array with it's index number */
    output.innerText = myArray[0];
	// You can also change a particular element
    myArray[5] += "tiger";
	// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
    output.innerText = myArray[myArray.length-1];
	/* STEP 3: Determining array length
	Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
    myArray.length
	// In particular, looping through arrays
    for(let i = 0; i< myArray.length-1; i++){
        console.log(myArray[i]);
    }
	/* STEP 4: Convert a string to an array If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
    var myString = "dog, cat, elephant, tiger";
    var arrayFromString = myString.split(", ");
    console.log(arrayFromString);
	// Output one of the array items
    output.textContent = arrayFromString[2];
	// Output the last element of the array
    
	/* STEP 5: Convert an array back to a string
	Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
    output.textContent = arrayFromString.toString();
    output.textContent = arrayFromString.join("---");
	/* STEP 6: Adding and removing items from an array Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */
    step6a = myArray.push("H.Y.B");
	// Adding one or more items to an array with push() 
    output.textContent = step6a
	// Removing an item from an array with pop() 
    output.textContent = myArray.pop();
	// pop() returns the item that was removed, rather than the length of the updated array 

	// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
    output.textContent = myArray.unshift("New unshifted element");
    output.textContent = myArray.shift();
	/* That's it for the basics of working with arrays! With these tools at
		your disposal, a whole new world of possibilities with JavaScript are at your command */