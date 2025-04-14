let API_KEY = 'd1fb56cefeac80006bf1535b780e8771';
let resultContainer = document.querySelector("#results");
let userSearch = document.querySelector("#user-input");
let btn = document.querySelector("#submit");

function typeOfSearch() {
    //we declare the searchType variable depending on which element is selected 
    let searchType = document.querySelector('input[name="searchtype"]:checked');
    //if nothing is choosed then we return null
    if (!searchType) {
        return null; 
    }
    return searchType.value;
}

function search(type, input) {
    let url = `https://ws.audioscrobbler.com/2.0/?method=${type}.search&${type}=${input}&api_key=${API_KEY}&format=json`;

    fetch(url).then(response => response.json()).then(json =>displayResults(json, type));
        
}

function displayResults(data, type) {
    //Checking to see if we can grab any results from the fetch query
    if (!data || !data.results || !data.results[`${type}matches`]) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    const results = data.results[`${type}matches`].artist ||data.results[`${type}matches`].album;

    if (!results || results.length === 0) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    for (let item of results){
        const itemElement = document.createElement('div');
        itemElement.classList.add('result-item');

        switch (type) {
            case 'album':
                itemElement.innerHTML = `
                    <h5>${item.name}</h5>
                    <p>Artist: ${item.artist.name}</p>
                    <img src="${item.image[2]['#text']}" alt="${item.name}" />
                `;
                break;
            case 'artist':
                itemElement.innerHTML = `
                    <h5>${item.name}</h5>
                    <p>Listeners: ${item.listeners}</p>
                    <img src="${item.image[2]['#text']}" alt="${item.name}" />
                `;
                break;
            default:
                console.log('Unknown search type.');
                return;
        }

        resultContainer.appendChild(itemElement);
    };
}

btn.addEventListener("click", function () {
    let searchType = typeOfSearch();
    let searchTerm = userSearch.value;
    //putting out an alert for the user to make sure that they have all inputs filled
    if (!searchType || !searchTerm) {
        alert("Please select a search type and input a search term.");
    } else {
        search(searchType, searchTerm);
    }
});
