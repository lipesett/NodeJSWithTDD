//Standard pattern
function helloWorld(){
    console.log("Hello World");
}
helloWorld();

//ECMAScript 2015 - ES6 - ARROW FUNCTION
const greeting = () => {
    var date = new Date();
    return date.getHours() <= 12? "Good morning": date.getHours() <= 18? "Good afternoon": "Good evening";
}
console.log("The greeting of the moment is: " + greeting());