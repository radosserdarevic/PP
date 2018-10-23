
function isFirstEqualLast(arrstr) {
    if (arrstr[0] === arrstr[arrstr.length - 1]) {
        return true;
    } else {
        return false;
    }
}

console.log(isFirstEqualLast([1, 3, 4, 7, 9]));
console.log(isFirstEqualLast('ana voli milovana'));

var names = ['ana', 'pera', 'miki', 'andjelka'];

function printIsEndSame(arr) {
    var newarr = [];
    var name;
    for (var i = 0, j = 0; i < arr.length; i++) {
        name = arr[i];
        if (isFirstEqualLast(name)) {
            newarr[j] = name;
            j++;
        }
    }
    return newarr;
}

console.log(printIsEndSame(names));