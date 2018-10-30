
(function () {
    console.log("Hi");

    var drama = new Genre('Drama');
    var comedy = new Genre('Comedy');
    var action = new Genre('Action');
    var thriller = new Genre('Thriller');

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    var movie1 = createMovie('Movie title', 120, drama);
    var movie2 = createMovie('Movie title', 100, comedy);
    var movie3 = createMovie('Movie title', 110, action);
    var movie4 = createMovie('Movie title', 113, thriller);

    function createProgram(date) {
        var program = new Program(date);
        return program;
    }

    var program1 = createProgram('23.12.2018');
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program1.setNumber();
    var program2 = createProgram('24.12.2018');
    program2.addMovie(movie4);
    program2.setNumber();

    function createFestival(name, maxnumber) {
        var festival = new Festival(name, maxnumber);
        return festival;
    }

    var festival = createFestival('Our little festival', 10);
    festival.addProgram(program1);
    festival.addProgram(program2);
    festival.getData();

    function Genre(genre) {
        this.genre = genre;

        this.getData = function () {
            var code = this.genre[0] + this.genre[this.genre.length - 1];
            return code.toUpperCase();
        };
    }

    function Movie(title, duration, genre) {
        this.title = title;
        this.duration = parseFloat(duration);
        this.genre = genre;

        this.getData = function () {
            return '\t' + this.title + ', ' + this.duration + 'min, ' + this.genre.getData();
        };
    }

    function Program(date) {
        this.date = date;
        this.list = [];
        this.number = 0;

        this.addMovie = function (movie) {
            if (this.list) {
                if (this.maxGenre() && this.maxProgramDuration()) {
                    this.list.push(movie);
                } else {
                    console.log('You can not have more than 4 movies of the same genre in the program or you can not have program that is more than 8 hours long!');
                }
            }
        };

        this.setNumber = function () {
            this.number = this.list.length;
        };

        this.getNumber = function () {
            return this.number;
        };

        this.programDuration = function () {
            var programduration = 0;
            for (var i = 0; i < this.list.length; i++) {
                programduration += this.list[i].duration;
            };
            return programduration;
        };

        this.maxGenre = function () {
            var genres = ['DA', 'CY', 'AN', 'TR'];
            var max;
            for (var i = 0; i < genres.length; i++) {
                max = 0;
                for (var j = 0; j < this.list.length; j++) {
                    if (genres[i] == this.list[j].genre) {
                        max++;
                    }
                }
                if (max <= 4) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        this.maxProgramDuration = function () {
            if (this.programDuration() <= 8 * 60) {
                return true;
            } else {
                return false
            }
        }

        this.getData = function () {
            var string = '';
            string = 'Date: ' + this.date + ' Number of movies: ' + this.list.length + '\n';
            for (var i = 0; i < this.list.length; i++) {
                string += '\t' + this.list[i].getData() + '\n';
            }
            return string;
        };
    }

    function Festival(name, maxnumber) {
        this.name = name;
        this.program = [];
        this.maxnumber = parseFloat(maxnumber);
        this.totalnumber = 0;

        this.addProgram = function (program) {
            this.totalnumber += this.program.getNumber();
            console.log(this.totalnumber, this.maxnumber);
            if (this.totalnumber <= this.maxnumber) {

                console.log('added');

                this.program.push(program);
            } else {
                console.log('You can not have more than 20 movies in the festival!')
            }

        };

        // this.getTotalNumber = function () {
        //     return this.totalnumber;
        // };

        this.getProgramDuration = function () {
            var totalprogramduration = 0;
            for (var i = 0; i < program.length; i++) {
                totalprogramduration += this.program[i].programDuration();
            };
            return totalprogramduration;
        };

        this.getData = function () {
            if (this.getTotalNumber === 0) {
                var string = '';
                string = 'Weekend festival "' + this.name + '" has ' + this.getTotalNumber() + ' movie titles\n';
                for (var i = 0; i < this.program.length; i++) {
                    string += '\t' + this.program[i].getData();

                }
                console.log(string);
            } else {
                console.log('Weekend festival\n\tProgram to be announced');
            };
        }
    }
})();
