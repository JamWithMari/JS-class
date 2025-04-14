//Delcaring the variagles
let userSearch = document.querySelector("#user-input");
let btn = document.querySelector("#submit");
//the sectoin eelement that'll store all the results
let resultContainer = document.querySelector("#results");

function typeOfSearch(){

    //We're going to grab the checked radio input inside the function because otherwise it wouldn't be dynamic
    let searchType = document.querySelector('input[name="searchtype"]:checked');
    

    if(!searchType){
        return null;
    }
    return searchType.value;
}


function search(type, input){
    //the link to the deezer api we change it dynamically depending on the what their searching (album, artist, song) and search term
    let url = `https://api.deezer.com/search/${type}?q=${input}`;

    fetch(url).then(response =>response.json()).then(json =>displayResults(json));
    
    


}

function displayResults(data){
    // Clear any previous results in the resultsContainer
    resultContainer.innerHTML = '';
    
    // If there are no results, display a message
    if (!data.data || data.data.length === 0) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;
    }
    
    // Process results based on the search type (artist, album, or song)
    switch (data.data[0].type) {
        case 'artist':
            data.data.forEach(artist => {
                const artistElement = document.createElement('div');
                artistElement.classList.add('result-item');
                artistElement.innerHTML = `
                    <h5>${artist.artist.name}</h5>
                    <p>${artist.title}</p>
                    <p>${artist.album.title}</p>
                    <img src="${artist.album.cover_medium}" alt="${artist.artist.name}" />
                `;
                resultContainer.appendChild(artistElement);
            });
            break;

        case 'album':
            data.data.forEach(album => {
                const albumElement = document.createElement('div');
                albumElement.classList.add('result-item');
                albumElement.innerHTML = `
                    <h5>${album.title}</h5>
                    <p>${album.artist.name}</p>
                    <img src="${album.cover_medium}" alt="${album.title}" />
                `;
                resultContainer.appendChild(albumElement);
            });
            break;

        case 'track':
            data.data.forEach(song => {
                const songElement = document.createElement('div');
                songElement.classList.add('result-item');
                songElement.innerHTML = `
                    <h5>${song.title}</h5>
                    <p>${song.artist.name}</p>
                    <p>${song.album.title}</p>
                    <img src="${song.album.cover_medium}" alt="${song.title}" />
                `;
                resultContainer.appendChild(songElement);
            });
            break;

        default:
            console.log('Unknown type of result.');
            break;
    }
}
//Adding an evenet listener to the button
btn.addEventListener("click", function(){
    //first we have to make sure that the user selected a search type
    let searchType = typeOfSearch();
    let searchTerm = userSearch.value;
    //checking to see if the user filed in all the input fields
    if(!searchType || !searchTerm){
        alert("Please select a search type and input a search term");
    }else{
        //calling the search function
        search(searchType, searchTerm);
    }
})
