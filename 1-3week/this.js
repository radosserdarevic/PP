var x = 10;

window.x

//this u globalnom opsegu predstavlja window objekat.

function print() { console.log(this.x); }

//This u globalnim funkcijama (obicnim,reguilarnim) 
//Deklaracije i funcijski izrazi je window objekat

//U IIFE this je window objekat.




function point(x, y) { this.x = x; this.y = y; }

var p = new point(4, 5)

var pf = point(4, 5)

//Constructor funkcije
//1)Ako se pozivaju sa new: this je objekat koji kreira
//2)Ako se ne pozivaju sa new: this je window objekat

window.x = 10;

function outer() {
    console.log(this);
}

function Point(x, y) {
    this.x = x;
    this.y = y;

    this.print = function () {
        var that = this;
        function inner() {
            console.log(this);
        }
        inner(this);
        console.log(this);
    }
}


function Seat(number, category) {
    this.number = (function () {
        if (number == undefined) {
            return Math.random();
        }
    })();
}


//
var obj = { x: 10, y: 20 };
obj.print = function () {
    console.log(this.x, this.y);
}
obj.print();


function sum() {
    console.log("10");
}
sum.call();


var x = 10;
window.x;
this.x

print.call();
function print() { console.log(this.x) }

print();

print.call();

print.call({ x: 20 });

//

var sum = function (a, b) { return this.x + a + b; };
window.x
sum(4, 5)
sum.call(window, 4, 5);
sum.call({ x: 50, 4, 5});
sum.apply(window, [4, 5]);
//

var sumWithBind({ x: 30 });
sumWithBind(4, 5);

