//palindrom

var s = "anavolimilovana";
var i;
var j;
//var pal = true;
//for (i = 0, j = s.length - 1; pal && i < j; i++ , j--) {    
for (i = 0, j = s.length - 1; i < j; i++ , j--) {
    if (s[i] !== s[j]) {
        //pal = false;
        break;
    }
}
//if (pal) {
if (i == j) {
    console.log("Palindrom!");
} else {
    console.log("Not palindrom!");
}

for (i = 0; i < 5; i++) {
    console.log(i);
    if (i == 3) {
        break;
    }
}

//reversed string
a = 'javascript';
//b = [];
bs = '';
for (var i = 0; i < a.length; i++) {
    //b[i] = a[a.length - 1 - i];
    //bs += b[i];
    bs += a[a.length - 1 - i];
}
if (a === bs) {
    console.log('Palindrom!');
} else {
    console.log('Not palindrom!');
}

//continue
for (i = 0; i < 6; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//while
var i = 0;

while (i < 5) {
    i++;
}
console.log(i);

//do while
do {
    i++;
} while (i < 5)
console.log(i);