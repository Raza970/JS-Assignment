let _name = "okasha";
console.log(_name === "okasha")
console.log(_name === "ali")
console.log(10 === 10)
console.log(10 === 5)
console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= 5)
console.log(10 <= 5)
console.log(10 < 5 && _name === "okasha")
console.log(10 < 5 || _name === "okasha")

let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    arr[i] === 2 && console.log(true)
}

console.log(arr[1] !== 3 )
