
//Query Selectors
const allDivs = document.querySelectorAll('.movie-item')
const allImages = document.querySelectorAll('.movie-item img');
const allTitles = document.querySelectorAll('.movie-item .first-para');
const allYears = document.querySelectorAll('.movie-item .second-para');
const allImagesArray = Array.from(allImages);
const allDivsArray = Array.from(allDivs);
const allTitlesArray = Array.from(allTitles);
const allYearsArray = Array.from(allYears);

// Toggles Harmburger 
function myFunction(x) {
  x.classList.toggle("change");

  // Toggles menu
  var navBar = document.getElementById("nav-bar");
  if (navBar.style.display === "block") {
      navBar.style.display = "none";
    } else {
      navBar.style.display = "block";
    }
}


let pictureSize;
// const height = screen.height;
const width = screen.width;
console.log(width)

if ((width <= 375) && (width <= 1023)){
    pictureSize = "w185"
} else if (width === 1024 || width > 1024){
    pictureSize = "w500"
} 



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

        let eachMovie = "";
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
                eachMovie += ` 
                            <div class = "movie-item">
                            <img src="http://image.tmdb.org/t/p/${pictureSize}/${poster_path}" alt="" class="img-link" id="${id}"> 
                            <div class= "container">
                            <p class = "first-para">${title || original_name}</p>                                
                            <p class = "second-para">${release_date || first_air_date}</p>                            
                            </div>
                            </div>`);
          }
        );
  
        let test = (document.querySelector(".movie-gallery").innerHTML = eachMovie);
        let newDiv = document.querySelectorAll('.movie-item');
        const newDynamicDivs = Array.from(newDiv)


        newDynamicDivs.forEach(newDivs => {
            newDivs.addEventListener("click", showMovieDetails)
        });
    })
}


function showMovieDetails(event) {
    // Get Movie Id
    let divClicked = event.target.id;
    // let divClicked = event.target.nextElementSibling.firstElementChild.textContent;

    const movieId = divClicked
    window.location.href = "./movieDetails.html?id=" + movieId;   
}
