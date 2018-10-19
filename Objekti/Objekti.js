// var movie = {

//     name: "Good fellas",
//     genre: "Crime drama",
//     country: "Usa",
//     imdb: 9,
//     producer: "Martin Skorseza",


// };





// var changeGenre=(function (genre) {

//     if (movie.genre === "Crime drama") {


//         movie.genre = "Thriler";

//     }

// })('movie.genre')

// console.log(movie.genre);


//console.log ("my favorite movie is "+movie.name);


//console.log("country of this movie is " +movie.country);

//console.log(movie.changeGenre);



// function createUser(userUsername,userPassword){
//     var newUser = {};
//     newUser.username = userUsername;
//     newUser.password = userPassword;
//     newUser.changePassword = function(newPassword);
//     thispassword = newPassword;
// };


//     return newUser;
// }


// var visnja;
// visnja = createUser ('visnja','1234');
// visnja.changePassword('abcf');
// console.log(visnja.username)
// //



// var misa =User('Misa','123456');

// console.log(misa.username);
// console.log(misa.password);


// function Movie(genre,title,length){


// this.genre=genre;

// this.title=title;

// this.length=length;


// this.getData =function(){


//  return this.title + ", " + this.genre;


// }

// this.changeGenre = function(){


// return this.genre="comedy";

// }


// }

// var Batman = new Movie("Action","Batman the dark knight",120);

// console.log(Batman.changeGenre())



function Movie(genre,title,length){
this.genre=genre;
this.title=title;
this.length=length;
this.getdata =function(){

    
    return "this movie is "  +this.length + " min long";
    
}
this.getinformation = function(){


return this.genre + " " + this.title + " " + this.length;

}

}

var Gladiator = new Movie ("action","Gladiator",130);


console.log(Gladiator.getdata());


console.log(Gladiator.getinformation());







