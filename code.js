// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (input === undefined || input === true || input === false || input === null) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}
