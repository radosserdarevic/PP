
var user = {
    username: 'Misa',
    password: 'misa123',
    email: 'misa@gmail.com',
    age: 88,
    gender: 'male',
    js: false,
    birthday: function () {
        user.age++;
    },
    learnjs: function () {
        user.js = true;
    },
    changePassword: function (newPassword) {
        user.password = newPassword;
    }
};

console.log(user.username);
console.log(user.image);
console.log(user.js);
user.learnjs();
console.log(user.js);
user.changePassword("MisaJS");
console.log(user.password);
//console.log(user.something);  //undefined
//user.changeImage();   //type error, is not a function

user.age = 25;
console.log(user.age);

user.phone = '123456789';
console.log(user.phone);

delete user.age;
console.log(user.age);

//

var myGroup = {
    name: 'Azra',
    frontman: 'Johnny',
    founded: 1977,
    active: false,
    activate: function () {
        myGroup.active = true;
    },
    yearsOld: function (y) {
        return y - myGroup.founded;
    },
    year: function () {
        return myGroup.founded;
    }
}

console.log(myGroup.name);
console.log(myGroup.yearsOld(2018));
console.log(myGroup.year());
console.log(myGroup.year);  //function


function Mygroup(name, frontman, founded, active) {
    this.name = name;
    this.frontman = frontman;
    this.founded = founded;
    this.active = active;
    this.activate = function () {
        this.active = true;
    };
    this.deactivate = function () {
        this.active = false;
    };
    this.yearsOld = function (y) {
        return y - this.founded;
    };
    this.year = function () {
        return this.founded;
    };
}

var group = new Mygroup('Azra', 'Johnny', 1977, false);

console.log(group.name);
console.log(group.yearsOld(2018));
console.log(group.year());


var newObj = {};
//var newObj = new Object();

var group1 = new Mygroup('Beogradski Sindikat', 'Bosko', 1999, true);

console.log(group1.name);
console.log(group1.yearsOld(2018));
console.log(group1.founded);
console.log(group1.year());


console.log(group1.active);
group1.deactivate();
console.log(group1.active);
group1.activate();
console.log(group1.active);


function multiply(a, b) {
    var mResult = a * b;
    return function (a, b) {
        return mResult + a + b;
    }
}

console.log(multiply(2, 3)(2, 3));

function Coffee(type, strength, sugar, milk) {
    this.typeOfCoffee = type;
    this.coffeeStrength = strength;
    this.withSugar = sugar;
    this.withMilk = milk;

    this.addSugar = function () {
        this.sugar++;
    };

    this.printInfo = function () {
        console.log("This coffee is: " + this.typeOfCoffee + "!");
        switch (this.coffeeStrength) {
            case 1:
            case 2:
                console.log("Weak coffee!");
                break;
            case 3:
            case 4:
                console.log("Regular coffee!");
                break;
            case 5:
            case 6:
                console.log("Strong coffee!");
                break;
        }
        if (this.withSugar > 0) {
            console.log("Super sweet coffee!");
        } else {
            console.log("Not so sweet coffee!");
        }
        var milkMessage = (this.withMilk) ? "With milk!" : "Without milk!";
        console.log(milkMessage);
    }

    //return this.
}

var ourCoffee = new Coffee("Mocha", 6, 1, true);
console.log(ourCoffee.printInfo());

var s = new String('Dobro jutro!');
var newS = s.toUpperCase();
var position = s.indexOf('ju');
var sliced = s.slice(3, 7);
vas splitted = s.split('o');
vas splittedNew = s.split(' ');
var sorted = s.split('').sort();

var newArrey = new Array();
var newArrey = new Array(4);
var newArrey = new Array(4, 3, 11, 23);

var position = newArrey.indexOf(3);
var position = newArrey.indexOf(3, 2);
var position = newArrey.lastIndexOf(3);
var position = newArrey.indexOf(33); //-1

var arrayAsString = newArrey.join('');
var arrayAsString = newArrey.join(); //,

var array = new Array(2, 5, 3, 8, 23);
var sorted = array.sort();
var sorted = array.sort(function (a, b) { return a - b; });
var sorted = array.sort(function (a, b) { return b - a; });

var array = new Array('C++', 'Phyton', 'PHP', 'JS', 'Java');
var sorted = array.sorted(function (s1, s2) { return s1.length - s2.length });

//selection sort
var a = [11, 5, 2, 9, 8, 8];
function ourSort(array) {
    var element;
    var temp;
    for (var i = 0; i < array.length; i++) {
        element = array[i];
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] > element) {
                temp = array[j];
                array[j] = element;
                element = temp;
            }
        }
        array[i] = element;
    }
    return array;
}

function ourSort1(array) {
    var temp;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

console.log(ourSort1(a));


var a = [4, 6, 7, 9, 34];

for (var i in a) {
    console.log(i, a[i]);
}

var o = {
    x: 10,
    y: 11,
    z: 20
}

for (var property in o) {
    console.log(property);
    console.log(o.property); //undefined
}

for (var property in o) {
    console.log(o[property]);
}

var obj = new Object();
obj.x = 10;
obj.y = 20;

Object.defineProperty(obj, 'z', {
    value: 30,
    writable: false,
    enumerable: true,
    //enumerable: false, //nevidimo z
    configurable: true
});

obj.x = 15;
//obj.z = 15;

console.log(obj);






