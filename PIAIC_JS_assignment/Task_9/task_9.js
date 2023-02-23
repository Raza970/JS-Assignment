// In this task I have to store my favorite number in a variable and display in console
var fav_number = 6;
console.log(`my favorite numberr is ${fav_number}`)


//In this project I have to convert user name into uppercase, lowercase, and titlecase
var _name = "Raza Malik";
var upperCase = _name.toUpperCase();
var lowerCase = _name.toLocaleLowerCase();

const titleCase = () => {
    var _split = lowerCase.split(' ');
    for (let i = 0; i < _split.length; i++) {
        _split[i] = _split[i].charAt(0).toUpperCase() + _split[i].slice(1);
    }
    return _split.join(" ")
}

console.log(upperCase)
console.log(lowerCase)
console.log(titleCase())