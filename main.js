const word = "freecodecamp";


// capitalize


String.prototype.capitalize = function () {
    let newString = "";
    for (let index = 0; index < 1; index++) {
        newString = this[index].toUpperCase() + this.slice(1);
    }

    return newString;
}


console.log(word.capitalize());




// // reverse


String.prototype.reverse = function () {
    let newString = "";
    for (let i = this.length - 1; i >= 0; i--) {
        newString += this[i];
    }
    return newString;
}

console.log(word.reverse());



//Vowels

String.prototype.capitalizeVowels = function () {

    const output = this.replace(/[aeiou]/gi, function (m) {
        m = m.toUpperCase();
        return m;
    });

    return output;

}

console.log(word.capitalizeVowels());


