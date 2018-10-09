
// Zadatak 25 - Sortiranje brojeva

var a = 0; b = -1; c = 4;
var max;

(a < b)? (max = a, a = b, b = max ): ""; 
(a < c)? (max = a, a = c, c = max ): "";
(b < c)? (max = b, b = c, c = max ): "";

console.log(a , b , c);

// Zadatak 24 - Pronaci najveci broj

var a = -5; b = -2; c = 6; d = 0; e = -1;
var max1;
var max2;
var max3;
var rez;

(a > b)? max1 = a : max1 = b;
(c > d)? max2 = c : max2 = d;
(max1 > max2)? max3 = max1 : max3 = max2;
(max3 > e)? rez = max3 : rez = e;

console.log(rez);

// Zadatak 23 - Da li je broj i da li je deljiv sa 2

var a = 6;
var rez;

(typeof(a) && a % 2 == 0)? rez = a/2 : rez = "X";
console.log(rez);


