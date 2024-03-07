//Standard pattern
function helloWorld() {
    console.log("Hello World")
}
helloWorld();

//ECMAScript 2015 - ES6 - ARROW FUNCTION
const greeting = () => {
    // var date = new Date();
    const date2 = new Date();
    return date2.getHours() <= 12 ? "Good morning" : date2.getHours() <= 18 ? "Good afternoon" : "Good evening";
}
console.log("The greeting of the moment is: " + greeting());