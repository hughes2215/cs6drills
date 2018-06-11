



let favMovie = (name = 'world',movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie();


//This gets names and returns the first one.

let getFirstName = (fullName) => {return fullName.split(' ', 1) }

console.log(getFirstName('Bobbito Brown'));

let getSecondName = (fullName) => {return fullName.split(' ', 1) }

console.log(getSecondName('Billy Blanks'));

let newfunc = (x , y) =>  {return x ^ y, x * y};