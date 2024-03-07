//Standard pattern
function helloWorld() {
    console.log("Hello World")
}

//ECMAScript 2015 - ES6 - ARROW FUNCTION
const greeting = () => {
    const date = new Date().getHours();
    if (date < 12) return "Good morning";
    if (date < 18) return "Good afternoon";
    return "Good night";
};

helloWorld();
console.log("The greeting of the moment is: " + greeting());