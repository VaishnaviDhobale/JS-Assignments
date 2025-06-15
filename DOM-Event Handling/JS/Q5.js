let inputVal = document.getElementById("enterText");
let showText = document.getElementById("showText");

// changing div value based on input value 
inputVal.addEventListener("input",()=>{
   showText.textContent = inputVal.value;
})