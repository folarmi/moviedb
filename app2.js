const movieTitle = document.getElementById('movie-title');
const movieImg = document.getElementById('movie-img');
const releaseDate = document.getElementById('release-date');
const movieOverview = document.getElementById('movie-overview');
const genre = document.getElementById('genre');
const rating = document.getElementById('rating');
const website = document.getElementById('website');



function loadMovieDetails(){
    //To extract query parameter from page link
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('id')


    var api = 'https://api.themoviedb.org/3/movie/' + name + '?api_key=514318c6f6f673457a51ffcaf8158cf2&append_to_response=videos,images';

    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)


            //Get data from Api
            let title = data.original_title;
            let img = data.poster_path;
            let yearReleased =data.release_date;
            let plots = data.overview;
            let Genre = data.genres;
            let web = data.homepage;
            
            

            //Put Elements into DOM
            movieTitle.innerHTML = title;
            releaseDate.innerHTML = yearReleased;
            movieOverview.innerHTML = plots
            movieImg.setAttribute('src','http://image.tmdb.org/t/p/w500/' + img);
            website.setAttribute('href', web)
            genre.innerHTML = "Genre: " + Genre;
            plotTitle.innerHTML = "PLOT"
        }) 
}


// https://api.themoviedb.org/3/movie/tt0082971/external_ids?api_key=514318c6f6f673457a51ffcaf8158 cf2



// https://api.themoviedb.org/3/movie/tt0082971?api_key=514318c6f6f673457a51ffcaf8158cf2&language=en-US