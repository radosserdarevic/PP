
var book = {
    title: 'Book title',
    author: 'Pera Peric',
    published: 2018,
};

var animal = {
    name: 'Dzeki',
    species: 'dog',
};

var person = {
    name: 'Bojan',
    surname: 'Dimitric',
    age: 41,
    sex: 'male',
};

function Book(title, author, published) {
    this.title = title;
    this.author = author;
    this.published = published;
}

var bookInstance = new Book('Book title', 'Marko Markovic', 2017);

function Animalobject(name, species) {
    this.name = name;
    this.species = species;
}

var animalInstance = new Animalobject('', 'dog');

function Personobject(name, surname, age, sex) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.fullName = function () {
        return this.name + ' ' + this.surname;
    };
}

var personInstance = new Personobject('Bojan', 'Dimitric', 41, 'male');
console.log(personInstance.fullName());