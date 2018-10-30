var number = 90;
if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

var broj = (number % 2 == 0) ? "even" : "odd";
console.log(broj);

var number = 100;
if (number % 4 == 0 && number % 5 == 0) {
    console.log(number);
}
var number = (number % 4 == 0 && number % 5 == 0);
console.log(number);

var a = 3;
var b = -7;
var c = 2;

var sign = (a * b * c < 0) ? "-" : "+";
console.log(sign);

var number = 77;
if (typeof number === "number") {
    if (number % 2 === 0) {
        console.log(number / 2);
    } else {
        console.log("X");
    }
}

var result = (typeof number == "number") ? ((number % 2 === 0) ? console.log(number / 2) : console.log("X")) : console.log("X");

var niz = [-5, -2, -6, 0, - 1], max = -100;
for (var i = 1; i < niz.length; i++) {
    if (niz[i - 1] > niz[i]) {
        max = niz[i - 1];
    } else {
        max = niz[i];
    }
}
console.log(max);

var d = 0;
var e = -1;
var f = 4;
var max = max1 = max2 = -100;

if (d > e) {
    max1 = d;
} else {
    max2 = e;
}
if (e > f) {
    max1 = e;
} else {
    max2 = f;
}
if (max1 > max2) {
    max = max1;
} else {
    max = max2;
}

max1 = (d > e) ? d : e;
max2 = (e > f) ? e : f;
max = (max1 > max2) ? max1 : max2;

if (d > e && d > f) {
    if (e > f) {
        console.log(d, e, f);
    } else {
        console.log(d, f, e);
    }
}

var result = (d > e && d > f) ? ((e > f) ? console.log(d, e, f) : console.log(d, f, e)) : "";

console.log(max);
