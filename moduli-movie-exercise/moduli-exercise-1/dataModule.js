var dataModule = (function () {


    function Genre(genre) {

        this.genre = genre;


    }


    function Movie(title, genre, length) {


        this.title = title;

        this.genre = genre;

        this.length = length;

    }
    Movie.prototype.getInfo = function (){

        return this.title + ','+ this.genre+','+this.length
    }

    var movieList = [];


    
    function addMovie(title, genre, length) {
        
        var genreObj = new Genre(genre);
        var movie = new Movie(title, genreObj, length);

        movieList.push(movie);



    }

    return {

        addMovie: addMovie,

    }

}());