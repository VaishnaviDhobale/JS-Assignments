
// Create a div with some text inside. When the user hovers (mouse over) on the div, 
// change its background color to light blue. When the mouse leaves, revert it back to white.

let container = document.getElementById("container");
container.addEventListener("mouseover",()=>{
    container.style.backgroundColor = "lightblue"
})

container.addEventListener("mouseout",()=>{
    container.style.backgroundColor = "white"
})