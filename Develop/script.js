// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Create funtion for passwordLength prompt
  function passwordLengthFunction() {
    // initial prompt asking user to enter number of characters
    let passwordLengthInput = prompt("Please choose how many characters you would like your password to contain");
    
    // if user hits cancel on prompt, then it cancels functions
    if (passwordLengthInput === null) {
      console.log("user hit cancel in password length prompt");
      return; // PROBLEM: CONTINUES TO NEXT PROMPT  
    }

    // if password length input > 128, then user gets alert
    else if (passwordLengthInput > 128) {
      alert("Password must be less than 128 characters");
      return; // PROBLEM: CONTINUES TO NEXT PROMPT AND DOESN'T RERUN FUNCTION
    }

    // if password length input <= 7, then user gets alert
    else if (passwordLengthInput <=7 ) {
      alert("Password must be greater than or equal to 8 characters");
      return; // PROBLEM: CONTINUES TO NEXT PROMPT AND DOESN'T RERUN FUNCTION
    }

    else if (passwordLengthInput > 7 && passwordLengthInput < 129) {
      passwordLength[0] = passwordLengthInput;
      console.log("passwordLength: " + passwordLength);  
    }
  }
  passwordLengthFunction();


  // Create function for lowercase characters confirmation
  function lowercaseFunction() {
    let lowercaseConfirmation = "Click OK to include lowercase characters";

    // If user hits Ok, then password will include lowercase characters
    if (confirm(lowercaseConfirmation) == true) {
      console.log("user hit ok to include lowercase");
      includeLowercase = true;
    // If user hits Cancel, then password will not include lowercase characters
    } else {
        console.log("user hit cancel to not include lowercase");
        includeLowercase = false;
    }
  } 
  lowercaseFunction();
   
  
  // Create function for uppercase characters confirmation
  function uppercaseFunction() {
    let uppercaseConfirmation = "Click OK to include uppercase characters";

    // If user hits Ok, then password will include uppercase characters
    if (confirm(uppercaseConfirmation) == true) {
      console.log("user hit ok to include uppercase");
      includeUppercase = true;
    // If user hits Cancel, then password will not include uppercase characters
    } else {
        console.log("user hit cancel to not include uppercase");
        includeUppercase = false;
    }
  }
  uppercaseFunction();


  // Create function for numeric characters confirmation
  function numericFunction() {
    let numericConfirmation = "Click OK to include numeric characters";

    // If user hits Ok, then password will include numeric characters
    if (confirm(numericConfirmation) == true) {
      console.log("user hit ok to include numeric characters");
      includeNumeric = true;
    // If user hits Cancel, then password will not include numeric characters
    } else {
      console.log("user hit cancel to not include numeric characters");
      includeNumeric = false;
    }
  }
  numericFunction();


  // Create function for special characters confirmation
  function specialCharacterFunction() {
    let specialCharacterConfirmation = "Click OK to include special characters";

    // If user hits Ok, then password will include special characters
    if (confirm(specialCharacterConfirmation) == true) {
      console.log("user hit ok to include special characters");
      includeSpecialCharacter = true;

    // If user hits Cancel, then password will not include special characters
    } else {
        console.log("user hit cancel to not include special characters");
        includeSpecialCharacter = false;
    }
  }
  specialCharacterFunction();



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



  // Create function so generate password function knows password length and if it incudes lowercase, uppercase, numeric, and special characters
  function generatePassword() {

  }
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


















