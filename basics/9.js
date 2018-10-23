
function replaceSpace(str, separator) {
    // if (!separator) {
    //     separator = '-';
    // }    
    separator = separator || '-';
    var newstr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newstr += separator;
        } else {
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(replaceSpace('Replace spaces with dashes!'));
console.log(replaceSpace('Replace spaces with dashes!', "*"));