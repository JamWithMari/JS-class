// STEP 1: Declare and initialize variables
		// STEP 1a: Grab the parts of the DOM that we need to build the invoice
        var priceText = document.querySelector('td');
        var tableBody = document.querySelector('tbody');
		// STEP 1b: Build the products array in the format 'Product Name: 0.00'
        var productList = ["Caps: 9.99", "T-shirt: 19.54", 'Socks: 12.99', 'Shoes: 420.69']
		// STEP 1c: Set up invoiceTotal variable - start at zero
        var invoiceTotal = 0;
		// STEP 2: Build a loop to iterate through the products array
        for(let i =0; i<productList.length; i++){
            let productArray =productList[i].split(": ");
            let productName = productArray[0];
            let price = Number(productArray[1]);
            invoiceTotal += price;
            console.log(invoiceTotal);
            var tableRow = document.createElement("tr");
            var tableData ="<td>" + productName + "</td><td>" + price + "</td>";

            tableRow.innerHTML = tableData;
            console.log(tableRow);
            tableBody.appendChild(tableRow);
            priceText.textContent("$"+invoiceTotal);


        }
		// STEP 3: Break apart the product name from the price for each item with split()
        
		// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
        
		// STEP 5: Add the price of this product to the invoice total

		// STEP 6: Capture each product name and price as variables 

		// STEP 7: Create a TR element for this product and price in the invoice table

		// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price

		// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)

		// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places