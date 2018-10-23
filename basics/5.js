
function arraysAreEqual(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true
}

// arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 4]);
console.log(arraysAreEqual([2, 2, 3, 4], [1, 2, 3, 5]));