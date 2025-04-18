let header = document.querySelector('h1');
const userInput = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submit-button');
const tableBody = document.querySelector('#table-body');

//function that does my fetch request 
function fetchMovies(){
    let userVal = userInput.value;
    if(userVal ==""){
        alert("pelase enter a movie name");
    }else{
        let baseURL ="http://www.omdbapi.com/"
        let key = "67516ec2";
        let url = `${baseURL}?apikey=${key}&s=${userVal}`;
        console.log(url);
        fetch(url).then(response =>response.json()).then(json =>displayMovies(json));
    }
}
//functionl that displays all my movies
function displayMovies(data){
    console.log(data);
    let moviesArray = data.Search;
    for(let movie of moviesArray){
        console.log(movie);
        let tableRow = document.createElement("tr"); // <tr></tr>
        let imdbIdTd = document.createElement("td"); // <td></td>
        let titleTd = document.createElement("td"); // <td></td>
        let yearTd = document.createElement("td"); // <td></td>
        let posterTd = document.createElement("td"); // <td></td>

        let posterImg = document.createElement('img');//<img?
        posterImg.setAttribute('src', movie.Poster);
        posterTd.appendChild(posterImg);
        imdbIdTd.textContent = movie.imbdID;
        titleTd.textContent = movie.Title;
        yearTd.textContent = movie.Year;

        tableRow.appendChild(imdbIdTd);
        tableRow.appendChild(titleTd);
        tableRow.appendChild(yearTd);
        tableRow.appendChild(posterTd);


        tableBody.appendChild(tableRow);
        
    }
    
}
//event listener for the button
submitBtn.addEventListener("click", fetchMovies);