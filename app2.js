const movieTitle = document.getElementById('movie-title');
const movieImg = document.getElementById('movie-img');
const releaseDate = document.getElementById('release-date');
const movieOverview = document.getElementById('movie-overview');
const genre = document.getElementById('genre');
const rating = document.getElementById('rating');
const website = document.getElementById('website-link');
const iFrame = document.querySelector('iframe');
const searchButton = document.getElementById('search-button');
const searchMovie = document.querySelectorAll('.search-movie');
const searchMovieArray = Array.from(searchMovie);
const trailerButton = document.querySelector('.trailer-button');
const closeButton = document.querySelector('.close-button');
const videoContainer = document.querySelector('.movie-trailer');
const trailer = document.querySelector('video');




// searchButton.addEventListener('click',getMovieName);





function loadMovieDetails(){
    //To extract query parameter from page link
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('id')


    var api = 'https://api.themoviedb.org/3/movie/' + name + '?api_key=514318c6f6f673457a51ffcaf8158cf2&append_to_response=videos,images';

    fetch(api)
        .then((res) => res.json())
        .then((data) => {


            //Get data from Api
            let title = data.original_title;
            let img = data.poster_path;
            let yearReleased =data.release_date;
            let plots = data.overview;
            let Genre = data.genres;
            let web = data.homepage;
            let trailer = data.videos.results[0].key;
        
            let allGenres = Genre.map(genre => genre.name);
            let genreString = allGenres.toString();
            

            //Put Elements into DOM
            iFrame.setAttribute('src','https://www.youtube.com/embed/' + trailer);
            movieTitle.innerHTML = title;
            releaseDate.innerHTML = "Release date: " + yearReleased;
            movieOverview.innerHTML = plots
            movieImg.setAttribute('src','http://image.tmdb.org/t/p/w500/' + img);
            website.setAttribute('href', web)
            genre.innerHTML = "Genre: " + genreString;
            plotTitle.innerHTML = "PLOT"
            // const test = iFrame.setAttribute('src','https://www.youtube.com/embed/' + trailer);
            // console.log(test)
        }) 
}


searchMovieArray.forEach(inputBox => {
    inputBox.addEventListener("keydown", function(event){
        if (event.keyCode === 13){
            const movieValue = event.target.value;
               movieValue.textContent = ""
  
               window.location.href = "./searchResults.html?query=" + movieValue;  
        }
    });
});

//Play Trailer
trailerButton.onclick = function() {
    videoContainer.setAttribute('class','showing');
}

closeButton.onclick = function() {
    videoContainer.setAttribute('class','movie-trailer');
}