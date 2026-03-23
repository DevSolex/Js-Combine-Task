/*
Iredia039:

Exercise 1 — Quote Printer

Store a quote and an author name in two separate variables, then print them in this format:

Expected Output
"Your quote here" - Author Name

*/

const quotes = '"i\'m not wrong, what\'s wrong is this messed up world"';
const author = "ken kaneki"
console.log(`${quotes} - ${author}`);

/* 
ValJnr-dev1:

Exercise 2 — Biography Builder

Create four variables: firstName, lastName, country, and job. Use them to print a sentence in this format:

Expected Output
Andrew is a developer from India.

*/
let firstName = "Val"
let lastName = "Andrew"
let country = "India"
let job = "Developer"
console.log(`${firstName} is a ${job} from ${country}`)


/*
Amaka And Solex:
Exercise 3 — Profile Card Generator

Create variables for name, age, country, and hobby, then display a formatted profile card like this:

Expected Output
====================
Name : Solex
Age : 34
Country : Nigeria
Hobby : Coding
====================

*/
//  Question 3 using template literal
let userProfile= {
name: "Solex",
age : 34,
country: "Nigeria",
hobby: "coding"
};

let profileOutcome  = `Name: ${userProfile.name} 
Age: ${userProfile.age} 
Country: ${userProfile.country}
Hobby: ${userProfile.hobby}`;

console.log (profileOutcome)