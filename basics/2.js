
var arr1 = [1, 3, 4, -6, -321, -4];

function isPositive(n) {
    if (n >= 0) {
        return true;
    } else {
        return false;
    }
}

function findPositiveNums(arr) {
    var newarr = [];
    for (var i = 0, j = 0; i < arr.length; i++) {
        var num = arr[i]
        if (isPositive(num)) {
            newarr[j] = num;
            j++;
        }
    }
    return newarr;
}

console.log(findPositiveNums(arr1));

