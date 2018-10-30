var n = 346;
if (n > 100 && n < 1000) {
    console.log("jeste");
} else {
    console.log("nije");
}

var n_string = "" + n;
console.log(n_string.length);

if (n_string.length == 3) {
    console.log("jeste");
} else {
    console.log("nije");
}

var n2 = 346; //
console.log(n2 % 10);

var n3 = 346;
console.log((n3 - n3 % 10) / 10);

n = 346;
while (n != 0) {
    last_digit = n % 10;
    console.log(last_digit);
    n = (n - last_digit) / 10;
}

var a = [2, 4, 7, 8, 7, 7, 1, 7];
var e = 7;
var len = a.length;
var result = 0;

while (len >= 0) {
    len--;
    if (a[len] === e) {
        result++
    }
}
console.log(result);


