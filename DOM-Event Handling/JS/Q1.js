// Create a button and paragraph. When clicked on button, it will show paragraph and 
// button text should change, upon clicking again, it should hide paragraph.



let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", ()=>{
    if(btn.textContent === "Reveal Greeting"){
        para.style.display = "block";
        btn.textContent = "Hide Greeting";
    }else{
        para.style.display = "none";
        btn.textContent = "Reveal Greeting";
    }
})