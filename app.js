
//Query Selectors
const allDivs = document.querySelectorAll('.movie-item')
const allImages = document.querySelectorAll('.movie-item img');
const allTitles = document.querySelectorAll('.movie-item .first-para');
const allYears = document.querySelectorAll('.movie-item .second-para');
const allImagesArray = Array.from(allImages);
const allDivsArray = Array.from(allDivs);
const allTitlesArray = Array.from(allTitles);
const allYearsArray = Array.from(allYears);




  
  
// Event Listeners
allDivsArray.forEach(div => {
    div.addEventListener("click", showMovieDetails);
});

function loadImages(){
    var api = 'https://api.themoviedb.org/3/trending/all/day?api_key=514318c6f6f673457a51ffcaf8158cf2';

    
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            let movies = data.results;

            //Returns the movie links
            const posterLinks = movies.map((movie) => {
                return movie.poster_path;
            })

            
            //Returns movie title
            const movieTitles = movies.map((title) => {
                return title.title || title.original_name;
            })

            //Returns Year of Release
            const movieYear = movies.map((year) => {
                return year.release_date || year.first_air_date;
            })

            // Returns movieIds
            const movieIds = movies.map((movieId) => {
                return movieId.id;
            })


            for(var i = 0; i < allImagesArray.length; i++){
                allImagesArray[i].setAttribute("src", 'http://image.tmdb.org/t/p/w185/' + posterLinks[i]);
                allImagesArray[i].setAttribute("id", movieIds[i]);
                allTitlesArray[i].textContent =  movieTitles[i];
                allYearsArray[i].textContent =  movieYear[i];
            }
        })
}

function showMovieDetails(event) {
    // Get Movie Id
    let divClicked = event.target.id;
    // let divClicked = event.target.nextElementSibling.firstElementChild.textContent;

    const movieId = divClicked
    window.location.href = "./movieDetails.html?id=" + movieId;   
}









//Api for details and trailer
// 


// For plenty movies
// https://api.themoviedb.org/3/search/movie?api_key=514318c6f6f673457a51ffcaf8158cf2&query=whiplash&language=en&append_to_response=videos,images 