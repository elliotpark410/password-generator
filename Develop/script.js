// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create password crtieria prompt for when user clicks button 
function writePassword() {
  let passwordCriteria = prompt("Please chooose your password criteria");

  if (writePassword != null) {
    return;
  }

}