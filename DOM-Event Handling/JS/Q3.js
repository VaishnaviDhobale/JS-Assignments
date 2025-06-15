//  Create a button labeled "Click Me". Every time the button is clicked, increase a counter and display "You clicked X times" below the button.

let btn = document.getElementById("btn");
let showCount = document.getElementById("paragraph");
let  count = 0; 
btn.addEventListener("click",()=>{
    count++;
    showCount.textContent = count===1 ? `You clicked ${count} time.` : `You clicked ${count} times.`;
})
