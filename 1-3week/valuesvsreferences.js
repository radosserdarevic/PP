
var x = 10;
var y = 12;
var z = x;

console.log(x, y, z);

function sum(a, b) {
    return a + b;
}

var n1 = 5;
var n2 = 10;

console.log(sum(n1, n2));

var a = [1, 2, 3, 4];
var b = [5, 10, 90];
var c = a; //c --> a = [1, 2, 3, 4]  

a[0] = 11;
console.log(c);
c[2] = 50;
console.log(c);
console.log(a);

console.log(a == c); //console.log(a === c);

console.log(a == b);

b = c;

console.log(a == b);

var a = [1, 2, 3, 4];
function print(array) {
    array.push(56)
    console.log(array);
}

print(a);

console.log(a);

var point1 = {
    x: '20',
    y: 30
}

var point2 = {
    x: 20,
    y: 30
}

var point3 = point1;

console.log(point1 == point2);

console.log(point1 == point3);

//point1.x = 40;
point3.z = 50;

console.log(point1);

console.log(JSON.stringify(point1));

function extend(obj) {
    obj.desctiption = 'super poing';
}

var o = {
    x: 0,
    y: 0
}

extend(o);

console.log(o);