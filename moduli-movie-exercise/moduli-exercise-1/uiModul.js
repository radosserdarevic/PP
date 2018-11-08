var uiModule = (function () {

    
        
    var $title = document.querySelector("#title");
    var $length = document.querySelector("#length");
    var $genre = document.querySelector("#select");
    var $movieList = document.querySelector('#resdiv');

    function collectFormInput() {


        var movieTitle = $title.value;
        var movieLength = $length.value;
        var movieGenre = $genre.value;
        var listOfMovies = $movieList.value;

        return {


          movieTitle: movieTitle,
          movieLength: movieLength,
          movieGenre: movieGenre,
          
            
        }
    };
    function displayMovie(movie) {

   
           console.log(title)

        // var first=document.querySelector("#title").value;
        // var second = document.querySelector("#length").value;

        // var par =  document.createElement("p");

        // var text = document.createTextNode(first + " " + second);


        // par.append(text)

                

        // document.querySelector('#resdiv').append(par);


    }


    return {

        collectFormInput: collectFormInput,

        displayMovie: displayMovie,


    }

}())