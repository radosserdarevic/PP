
var model = (function () {

    var storage = {
        movies: []
    };

    function Movie(name, length, genre) {
        this.name = name;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getInfo = function () {

        return this.name + ', ' + this.length + ', ' + this.genre;
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

var view = (function () {

    var $name = document.querySelector('#name');
    var $length = document.querySelector('#length');
    var $genre = document.querySelector('#genre');
    var $movieList = document.querySelector('#movie-list');

    function collectFormInput() {

        var name = $name.value;
        var length = $length.value;
        var genre = $genre.value;

        return {
            name: name,
            length: length,
            genre: genre
        };
    }

    function displayMovie(movie) {

        $movieList.innerHTML += movie.getInfo() + '<br>';
    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie
    };

})();

var controller = (function (data, ui) {

    var $addMovie = document.querySelector('#add-movie');

    $addMovie.addEventListener('click', function (event) {

        var movieObject = ui.collectFormInput();
        var movie = data.createMovie(movieObject.name, movieObject.length, movieObject.genre);
        data.addMovieToList(movie);
        ui.displayMovie(movie);
    });

})(model, view);