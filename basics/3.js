
function outputSecond(string) {
    var arr = [];
    if (!string) {
        return arr;
    }
    for (var i = 0, ind = 0; i < string.length; i += 2) {
        arr[ind] = string[i];
        ind++;
    }
    return arr;
}

console.log(outputSecond());
console.log(outputSecond('Neki test string!'));