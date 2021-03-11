//JSON.stringify() -- Convert object into a string
//JSON.parse() -- convert a string into an object
localStorage.setItem('favouriteColor', 'blue');
console.log(localStorage.favouriteColor);

//how to store a variable
let arrayNames = ["Roland","Eddie","Susanna","Jake","Oy"];
localStorage.setItem('names', JSON.stringify(arrayNames));