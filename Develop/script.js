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
function passwordLengthFunction() {

  // initial prompt asking user to enter number of characters
  let passwordLengthInput = prompt("Please choose how many characters you would like your password to contain");

    // if user hits cancel on prompt, then it cancels functions
  if (passwordLengthInput === null) {
    return;
    console.log("user hit cancel");
  }

  // if password length input > 128, then user gets alert
  else if (passwordLengthInput > 128) {
    alert("Password must be less than 128 characters");
  }

    // if password length input <= 7, then user gets alert
  else if (passwordLengthInput <= 7) {
    alert("Password must be greater than or equal to 8 characters");
  }

  // if password length is in. NOT SURE IF THIS IS CORRECT
  else {

  }

}


// Create function for lowercase characters confirmation
function lowerCaseFunction() {
  let lowerCaseConfirmation = "Click OK to include lowercase characters";

  // If user hits Ok, then password will incorporate lowercase characters
  if (confirm(lowerCaseConfirmation) == true) {
     // ADD CODE. NEED TO GENERATE PASSWORD WITH SPECIAL CHARACTERS

  // If user hits Cancel, then password will not incorporate special characters
  } else {
        // ADD CODE. NEED TO GERENATE PASSWORD WITHOUT SPECIAL CHARACTERS
    
  }
}



// Create function for uppercase characters confirmation
function upperCaseFunction() {
  let upperCaseConfirmation = "Click OK to include uppercase characters";

  // If user hits Ok, then password will incorporate lowercase characters
  if (confirm(upperCaseConfirmation) == true) {
     // ADD CODE. NEED TO GENERATE PASSWORD WITH SPECIAL CHARACTERS

  // If user hits Cancel, then password will not incorporate special characters
  } else {
        // ADD CODE. NEED TO GERENATE PASSWORD WITHOUT SPECIAL CHARACTERS
    
  }
}


// Create function for numeric characters confirmation
function numericFunction() {
  let numericConfirmation = "Click OK to include numeric characters";

  // If user hits Ok, then password will incorporate lowercase characters
  if (confirm(numericConfirmation) == true) {
     // ADD CODE. NEED TO GENERATE PASSWORD WITH SPECIAL CHARACTERS

  // If user hits Cancel, then password will not incorporate special characters
  } else {
        // ADD CODE. NEED TO GERENATE PASSWORD WITHOUT SPECIAL CHARACTERS
    
  }
}


// Create function for special characters confirmation
function specialCharactersFunction() {
  let specialCharactersConfirmation = "Click OK to include special characters";

  // If user hits Ok, then password will incorporate special characters
  if (confirm(specialCharactersConfirmation) == true) {
     // ADD CODE. NEED TO GENERATE PASSWORD WITH SPECIAL CHARACTERS
  

  // If user hits Cancel, then password will not incorporate special characters
  } else {
        // ADD CODE. NEED TO GERENATE PASSWORD WITHOUT SPECIAL CHARACTERS

  }
}




const getRandomCharacter = {
  lowercase: getRandomLowercaseCharacter,
  uppercase: getRandomUppercaseCharacter,
  numeric: getRandomNumericCharacter,
  special: getRandomSpecialCharacter
}


// Create function to generate random lower case
function getRandomLowercaseCharacter() {
  let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  return lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
}
console.log(getRandomLowercaseCharacter());


// Create function to generate random upper case
function getRandomUppercaseCharacter() {
  let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
  return uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
}
console.log(getRandomUppercaseCharacter());


// Create function to generate random number character
function getRandomNumericCharacter() {
  let numericCharacters = '0123456789'
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}
console.log(getRandomNumericCharacter());


// Create function to generate random special character
function getRandomSpecialCharacter() {
  let specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"';
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
console.log(getRandomSpecialCharacter());