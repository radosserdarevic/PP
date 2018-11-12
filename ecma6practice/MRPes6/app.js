
let model = (function () {

    let storage = {
        movies: []
    };

    class Movie {
        constructor(name, length, genre) {
            this.name = name;
            this.length = length;
            this.genre = genre;
        }

        getInfo() {

            return `${this.name}, ${this.length}, ${this.genre}`;
        }
    }

    function createMovie(name, length, genre) {

        return new Movie(name, length, genre);
    }

    function addMovieToList(movie) {

        storage.movies.push(movie);
    }

    return {
        createMovie: createMovie,
        addMovieToList: addMovieToList
    };

})();

let view = (function () {

    let $name = document.querySelector('#name');
    let $length = document.querySelector('#length');
    let $genre = document.querySelector('#genre');
    let $movieList = document.querySelector('#movie-list');

    function collectFormInput() {

        let name = $name.value;
        let length = $length.value;
        let genre = $genre.value;

        return {
            name: name,
            length: length,
            genre: genre
        };
    }

    function displayMovie(movie) {

        $movieList.innerHTML += `${movie.getInfo()}<br>`;
    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie
    };

})();

let controller = (function (data, ui) {

    let $addMovie = document.querySelector('#add-movie');

    $addMovie.addEventListener('click', function (event) {

        let movieObject = ui.collectFormInput();
        let movie = data.createMovie(movieObject.name, movieObject.length, movieObject.genre);
        data.addMovieToList(movie);
        ui.displayMovie(movie);
    });

})(model, view);