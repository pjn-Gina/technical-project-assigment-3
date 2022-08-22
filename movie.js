let containerMovie = document.getElementById("movie-card");
let searchMovie = document.getElementById("search").value;

// console.log(containerMovie)

fetch('https://api.themoviedb.org/3/discover/movie?api_key=787dfb117e186bdc89bc11e14ff6106f&sort_by=popularity.desc&page=1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.results.forEach((movie) => {
            containerMovie.innerHTML += `
            <div class="col-12 col-lg-3 col-md-4">
                <div class="card h-100">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} weight="100" height="350">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.release_date}</p>
                        <span>Rating : ${movie.vote_average}</span>
                    </div>
                </div>
            `
        })
    })
    .catch((error) => console.log(error));


//fitur search

let button = document.getElementById("button-submit");
// console.log(button)

button.addEventListener("click", (event) => {
    event.preventDefault();
    let searchMovie = document.getElementById("search").value;
    if(searchMovie === '' || searchMovie === null) {
        containerMovie = `
        <h2> Enter The Movie Title</h2>
        `;
    } else {
        deletes();
        change();
        page =1;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=787dfb117e186bdc89bc11e14ff6106f&query=${searchMovie}&page=1`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                data.results.forEach((movie) => {
                    containerMovie.innerHTML += `
                    <div class="col-12 col-lg-3 col-md-4">
                    <div class="card h-100">
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} weight="100" height="350">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.release_date}</p>
                            <span>Rating : ${movie.vote_average}</span>
                        </div>
                    </div>
                `
                })

            })
            .catch((error) => console.log(error));

    }
        
});

function deletes() {
    containerMovie.innerHTML = "";
}

function change(){
    containerMovie.innerHTML = "";
}