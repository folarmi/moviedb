const similarButton = document.getElementById('similar');
similarButton.addEventListener('click',getSimilarMovies)

const tested = document.querySelector('no-movie')
console.log(tested)



function getSimilarMovies(event){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('id');
  
    window.location.href = "./similarMovie.html?query=" + name; 
}


function similarMovies(){
    const newQueryString = window.location.search;
    const newurlParams = new URLSearchParams(newQueryString);
    const finalName = newurlParams.get('query');


    var api = `https://api.themoviedb.org/3/movie/${finalName}/similar?api_key=514318c6f6f673457a51ffcaf8158cf2&language=en-US&page=1`;
  
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        let movies = data.results;

    
          
        let similarMovies = "";
        movies.forEach(
          ({
            title,
            original_name,
            release_date,
            first_air_date,
            poster_path,
            id,
          }) => {
            return (
                similarMovies += ` 
                            <div class = "movie-item" onClick={showMovieDetails()}>
                            <img src="http://image.tmdb.org/t/p/w185/${poster_path}" alt="" class="img-link" id="${id}"> 
                            <div class= "container">
                            <p class = "first-para">${title || original_name}</p>                                
                            <p class = "second-para">${release_date || first_air_date}</p>                            
                            </div>
                            </div>`);
          }
        );

    
  
        const testy = document.querySelector(".movie-gallery").innerHTML = similarMovies;
  
      

        if (testy === ''){
          var h2 = document.createElement("h2");
          document.querySelector(".movie-gallery").appendChild(h2);
          document.querySelector('.movie-gallery h2').innerHTML = "There are no similar movies"
        }

        let div = document.querySelectorAll('.movie-item');
        const dynamicDivs = Array.from(div)

        dynamicDivs.forEach(div => {
          div.addEventListener("click", showMovieDetails);
      });


  
          
      });
}

