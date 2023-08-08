function add7(a) {
    return a + 7;
};

let addSeven = a => a + 7;

function multiply(a, b) {
    return a * b;
}

let product = (a, b) => a * b;



function capitalize() {
    word = prompt("Word to capitalize?");
    toLower = word.toLowerCase().split('');
    console.log(toLower)
    toCapital = toLower[0].toUpperCase();
    console.log(typeof(toCapital));
    rest = toLower.slice(1).join("");
    console.log(rest);
    capitalized = (toCapital.concat(rest));
    console.log(capitalized);;

};
capitalize();


function lastLetter() {
    word = prompt("What's your word to be popped?")
    poppedLetter = word.split('').pop();
    console.log(poppedLetter);
}

lastLetter();