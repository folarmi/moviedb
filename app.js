//Query Selectors
const allImages = document.querySelectorAll('.movie-item img');
const allTitles = document.querySelectorAll('.movie-item .first-para');
const allYears = document.querySelectorAll('.movie-item .second-para');
const allImagesArray = Array.from(allImages);
const allTitlesArray = Array.from(allTitles);
const allYearsArray = Array.from(allYears);
console.log(allYearsArray)


function loadImages(){
    var api = '  https://api.themoviedb.org/3/trending/all/day?api_key=514318c6f6f673457a51ffcaf8158cf2';

    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            console.log(movies)
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
      
            for(var i = 0; i < allImagesArray.length; i++){
                allImagesArray[i].setAttribute("src", 'http://image.tmdb.org/t/p/w185/' + posterLinks[i]);
                allTitlesArray[i].textContent =  movieTitles[i];
                allYearsArray[i].textContent =  movieYear[i];
            }
                
            //  }
            //     // console.log(movies[j].title);
            //     console.log(movies[j].poster_path);
            //     // console.log(movies[j].release_date);
            //     }
        })

        // for(var i=0; i<images.length; i++) {
        //     getDivId.innerHtml = "<a id='g2Image' href='big/" + images[i].src + "'>" + images[i].src + "</a>";
        // }
}

      