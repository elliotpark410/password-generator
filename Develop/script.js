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






// Create funtion for passwordLength prompt
function passwordLength() {

  // initial prompt asking user to enter number of characters
  let passwordLengthInput = prompt("Please choose how many characters you would like your password to contain");

     // if user hits cancel on prompt, then it cancels functions
     if (passwordLengthInput === null) {
      return;
    }

    // if password length input > 128, then user gets alert
    else if (passwordLengthInput > 128) {
      alert("Password must be less than 128 characters")
    }

     // if password length input <= 7, then user gets alert
    else if (passwordLengthInput <= 7) {
      alert("Password must be greater than or equal to 8 characters")
    }

    // if password length is in 
    else {
      generatePassword();
    }

}

// NEED TO DELETE JUST FOR TESTING PURPOSES
passwordLength();









