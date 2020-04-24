function showAllMovies() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('query');

    var api = "https://api.themoviedb.org/3/search/movie?api_key=514318c6f6f673457a51ffcaf8158cf2&query" + "=" + name;
  
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        let movies = data.results;
  
        let allMovie = "";
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
                allMovie += ` 
                            <div class = "movie-item" onClick={showMovieDetails()}>
                            <img src="http://image.tmdb.org/t/p/w185/${poster_path}" alt="" class="img-link" id="${id}"> 
                            <div class= "container">
                            <p class = "first-para">${title || original_name}</p>                                
                            <p class = "second-para">${release_date || first_air_date}</p>                            
                            </div>
                            </div>`);
          }
        );
  
        let test = (document.querySelector(".movie-gallery").innerHTML = allMovie);
        let div = document.querySelectorAll('.movie-item');
        const dynamicDivs = Array.from(div)


        dynamicDivs.forEach(div => {
          div.addEventListener("click", showMovieDetails);
      });
          
      });
}


