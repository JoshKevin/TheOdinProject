const palindromes = function (word) {
    let array = word.toLowerCase().split("")
    let reverse = array.reverse().join('');
    console.log(reverse);
    if (word === reverse) {
        console.log('True');
        return true;
    }
};

palindromes('level')
