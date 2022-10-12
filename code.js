// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function() {
//     return "Hello, World!";
// }
                            //sayHello function
function sayHello(input) {
    if (input === undefined || input === true || input === false || input === null) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}
                            //isFive function
function isFive(x) {
    if (x===5){
        return true
    } else {
        return false
    }
}

console.log(isFive(null));