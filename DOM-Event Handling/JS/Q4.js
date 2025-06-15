// Create a password input field with a checkbox labeled "Show Password".
//  When the checkbox is checked, change the input type from "password" to "text" and back when unchecked

let inputPass = document.getElementById("pass");
let inputLebel = document.getElementById("passLebel");
let checkBox = document.getElementById("check");


checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    inputPass.setAttribute("type", "text");
    inputLebel.textContent = "Hide Password"
  }else{
    inputPass.setAttribute("type", "password");
    inputLebel.textContent = "Show Password"
  }
});
