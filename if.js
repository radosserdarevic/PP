// Zadatak 1
var a = 10;
var b = 6;

var rezultat = (a > b)? a:b;
console.log(rezultat);

if (a>b) {
    console.log(a);
}else{
    console.log(b);
}

// Zadatak 2
var a=6;

if (a % 2 == 0) {
    console.log("even");
}else{
    console.log("odd");
}

// Zadatak 3
var a=10;

if (a % 3 == 0) {
    if (a % 5 == 0) {
        console.log(a);
    }else{
        console.log("Nije deljiv sa 5");
    }
}else{
    console.log("Nije deljiv sa 3");
}

// Zadatak 4

var a = 3;

if (a < 0) {
    console.log("Znak je minus");
}else{
    console.log("Znak je plus");
}

// Zadatak 5

var a = 7;

if (typeof(a) == "number") {
    if (a % 2 == 0) {
        console.log("Rezultat je "+ a/2 );
        
    }else{
        console.log("X");
    }
}else{
    console.log("Uneta vrednost nije broj.")
}

// Zadatak 24

var a= -5; b = -2; c = -6; d = 0; e = -1;
var max = -1000;

if (a > max) {
    max = a;
}

if (b > max){
    max = b;
}
if (c > max) {
    max = c;
}

if (d > max){
    max = d;
}
if (e > max){
    max = e;
}
console.log(max);

// Zadatak 7

var a = 0; b = -1; c = 4;

if (a > b) {
    if (a >c ) {
        if (b > c) {
            console.log(a + "\n" + b + "\n" + c);
        }else{
            console.log(a + "\n" + c + "\n" + b);
        }
    }else{
        console.log(c + "\n" + a + "\n" + b);
    }
}else{
    if (b > c) {
        if (a > c) {
            console.log(b + "\n" + a + "\n" + c);
        }else{
            console.log(b + "\n" + c + "\n" + a);
        }
    }
}

// Zadatak 25

var a = 0; b = -1; c = 4;
var max;

if (a < b) {
    max=a;
    a=b;
    b=max;
}
if (a < c) {
    max=a;
    a=c;
    c=max;
}
if (b < c) {
    max=b;
    b=c;
    c=max;
}
console.log(a , b , c);

