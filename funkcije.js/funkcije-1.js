// function sum(a, b) {
//     var result;

//     result = a + b;


//     return result;

// }
// var final_result;
// sum(3, 5)

// final_result = sum(3, 5);

// console.log(final_result);

// function sum_of_all_arguments () {

//     var result = 0;

//     var i;

//     for (i=0; i<arguments.length;i++){
//         result = result + arguments[i];

//     }
//      return result;

// }


// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// var bmax = max(3, 5);
// console.log(bmax);
/*

function odd(a) {
    var s = "";
    if (a % 2 == 0) {
        s = "broj je paran";
    } else {
        s = "broj je neparan";
    }
    return s;
}

var rezultat = odd(11);
console.log(rezultat);
*/
/*
function isThree(a) {
    var s;
    if (a >= 100 && a < 1000) {
        s = "Broj ima tri cifre";
    } else {
        s = "Broj nema tri cifre";
    }
    return s;
}

var rezultat = isThree(99);
console.log(rezultat);*/

/*
function avg(a, b, c, d) {
    return (a + b + c + d) / 4;
}

var rezultat = avg(4, 5, 6, 7);
console.log(rezultat);*/
/*
function hmd(a) {
    var s = "";
    s = s + a;
    var i, j = 0;
    j = s.length;
    return j;
}

var rezultat = hmd(50);
console.log("Broj ima: " + rezultat + " cifre/i");*/
/*
function appe() {
    var i, r = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] == 7) {
            r++;
        }
    }
    return r;
}

var rezultat = appe(5, 10, 11, 7, 7, 7, 71, 15, 6, 7, 8);
console.log(rezultat);*/
/*
function appe(e) {
    var i, r = 0;
    var a = [2, 4, 7, 8, 7, 7, 1];
    for (i = 0; i < a.length; i++) {
        if (e == a[i]) {
            r++;
        }
    }

    return r;
}

var rezultat = appe(2);
console.log(rezultat);*/