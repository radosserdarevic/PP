
//1

function convertNumber(number, radix) {
    return number.toString(radix);
}

console.log(convertNumber(1001, 16));
console.log(convertNumber(1001, 8));
console.log(convertNumber(1001, 2));


//2

function reverse(number) {
    var string = new String(number);

    return parseFloat(string.split('').reverse().join(''));
}

console.log(reverse(12345));
console.log(typeof reverse(12345));

//3

function alphabeticalOrder(string) {
    return string.toLowerCase().split('').sort().join('');
}

console.log(alphabeticalOrder('Webmaster'));

//4

function alphabeticalOrder(string) {
    return string.split('').sort().join('');
}

function alphabetize(string) {
    var splitted = string.split(' ');
    for (var i = 0; i < splitted.length; i++) {
        splitted[i] = alphabeticalOrder(splitted[i]);
    }
    return splitted.join(' ');
}

console.log(alphabetize('Republic Of Serbia'));

//5

function splitString(string) {
    return string.split(' ');
}

console.log(splitString('John Snow'));

//6

function abbreviated(string) {
    var splitted = string.split(' ');
    var last = splitted[splitted.length - 1];
    last = last.charAt(0).concat('.');
    //last = last.split('')[0] + '.';
    splitted[splitted.length - 1] = last;
    return splitted.join(' ');
}

console.log(abbreviated('John Snow'));

//7

function padString(string, number, lr) {
    var length = number.toString().length;
    var newString;
    if (lr === 'l') {
        //newString = string.substring(0, string.length - length) + number;
        //newString = string.slice(0, string.length - length) + number;
        newString = string.slice(0, - length) + number;
    } else if (lr === 'r') {
        //newString = number + string.substring(length, string.length);
        //newString = number + string.slice(length, string.length);
        newString = number + string.slice(0, - length);
    }
    return newString;
}

console.log(padString('0000', 123, 'l'));
console.log(padString('00000000', 123, 'r'));

//8

function capitalizeFirst(string) {
    //var first = string[0].toUpperCase();
    var first = string.charAt(0).toUpperCase();
    var second = string.slice(1, string.length);
    //return first + second;
    return first.concat(second);
}

console.log(capitalizeFirst('js string exercises'));

//9

function hideEmail(email) {
    var position = email.indexOf('@');
    var firstPart = email.slice(0, position - 4);
    var secondPart = email.slice(position, email.length);
    //return firstPart + '....' + secondPart;
    //return firstPart.concat('....').concat(secondPart);
    return firstPart.concat('....', secondPart); 
}

console.log(hideEmail('somerandomaddress@example.com'));

//10

function changeCase(string) {
    var splitted = string.split('');
    for (var i = 0; i < splitted.length; i++) {
        if (splitted[i] === splitted[i].toLowerCase()) {
            splitted[i] = splitted[i].toUpperCase();
        } else {
            splitted[i] = splitted[i].toLowerCase();
        }
    }
    return splitted.join('');
}

console.log(changeCase("The Quick Brown Fox"));