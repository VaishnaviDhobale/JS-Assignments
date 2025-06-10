 // Helper function 
function multiply(a, b) {
    return a * b;
}

// Main function 
function calculateTotal(price, quantity) {
    return multiply(price, quantity);
}
console.log(calculateTotal(10,20));




// main musing arrow 
let calculateTotalWithArrow = (price, quantity) => multiply(price, quantity);
console.log(calculateTotalWithArrow(10,20));