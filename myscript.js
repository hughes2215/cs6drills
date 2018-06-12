



let favMovie = (name = 'world',movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie();


//This gets names and returns the first one.

let getFirstName = (fullName) => {return fullName.split(' ', 1) }

console.log(getFirstName('Bobbito Brown'));

let getSecondName = (fullName) => {return fullName.split(' ', 1) }

console.log(getSecondName('Billy Blanks'));


let newfunction = (x,y) =>{
    let exponent = (x^y)
    let product = (x*y)
    
    console.log(`The exponent total is ${exponent}. The product is ${product}`);
}

  
newfunction(5,4);

let person = (name , city , favfood) =>{
    console.log(...person1);
}
let person1 = [ "Joe",  "Kansas City" ,  "Salad"];
person();

let myname = "Bill";


let lastfun = (randnumbers) => {
   console.log(...xyz);
}

let xyz = [ 3, 2 ,1 ];
lastfun();

for(let p = 1; p < xyz.length ; p++){

console.log(...xyz);
}
