// let sum = function (a, b) {
//     return a + b
// }
// The same as arrow function
// let sum = (a, b) => {
//     return a + b
// }
// The same as
let sum = (a, b) => a + b

let double = (x, y) => x * y

// console.log(sum(2,3))
// console.log(double(5,4))

// const age = prompt("Your age", "18")
//
// let welcome
//
// if (age >= 18) {
//     welcome = () => alert("Hello")
// } else {
//     welcome = () => alert("You are child")
// }

// const welcome = age >= 18 ?
//     () => alert("Hello") :
//     () => alert("You are child")

// welcome()

// Recursion
// Default version of pow function
function pow(x, n) {
    let result = 1

    for (let i = 1; i <= n; i++) {
        result *= x
    }

    return result
}
// Recursion version of pow function
function powRecursion(x, n) {
    if (n === 1) {
        return x
    }
    return x * powRecursion(x, n - 1)
}

alert(powRecursion(2, 4))















