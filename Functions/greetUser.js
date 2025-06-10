// ↠  2. Create a function called greetUser that takes a parameter name and logs "Hello, <name>".
//  Example: greetUser("Rahul") ➝ Hello, Rahul



function greetUser(name="User"){
    console.log(`Hello ${name}!`);
}

greetUser("Vaishnavi");


// arrow function 
let greetUserWithArrow = name => {console.log(`Hello ${name}`)}
greetUserWithArrow()
