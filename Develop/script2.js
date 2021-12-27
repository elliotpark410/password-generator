// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;









  // Create a passwordLength var to determine how many characters to use 
  var passwordLength = [];

  // Create prompt for password length
  function passwordLengthPrompt() {
    var passwordLengthInput = prompt("Please choose how many characters you would like your password to contain");

    if (passwordLengthInput === null) {
      console.log("user hit cancel in password length prompt");
    } else if (passwordLengthInput > 128 || passwordLengthInput <= 7) {
      alert("Password must be between 8 and 128 characters");
    } else {
      passwordLength = passwordLengthInput;
    }
  }
  passwordLengthPrompt();
  console.log("passwordLength: " + passwordLength);






  // Create an includeCharacters var to determine which functions to use in generate password
  var includeCharacters = {
    includeLowercase: false,
    includeUppercase: false,
    includeNumeric: false,
    includeSpecialCharacter: false
  }

  // Create confirmation for lowercase
  function lowercaseConfirmation() {
    var lowercaseConfirmationInput = confirm("Click OK to include lowercase characters");

    if (lowercaseConfirmationInput) {
      console.log("user hit ok to include lowercase");
      includeCharacters.includeLowercase = true;
    } else {
        console.log("user hit cancel to not include lowercase");
        includeCharacters.includeLowercase = false;
    }
  }
  lowercaseConfirmation();


  // Create confirmation for uppercase
  function uppercaseConfirmation() {
    var uppercaseConfirmationInput = confirm("Click OK to include uppercase characters");

    if (uppercaseConfirmationInput) {
      console.log("user hit ok to include uppercase");
      includeCharacters.includeUppercase = true;
    } else {
        console.log("user hit cancel to not include uppercase");
        includeCharacters.includeUppercase = false;
    }
  }
  uppercaseConfirmation();


  // Create confirmation for numeric
  function numericConfirmation() {
    var numericConfirmationInput = confirm("Click OK to include numeric characters");

    if (numericConfirmationInput) {
      console.log("user hit ok to include numeric characters");
      includeCharacters.includeNumeric = true;
    } else {
        console.log("user hit cancel to not include numeric characters");
        includeCharacters.includeNumeric = false;
    }
  }
  numericConfirmation();


  // Create confirmation for special characters
  function specialCharacterConfirmation() {
    var specialCharacterConfirmationInput = confirm("Click OK to include special characters");

    if (specialCharacterConfirmationInput) {
      console.log("user hit ok to include special characters");
      includeCharacters.includeSpecialCharacter = true;
    } else {
        console.log("user hit cancel to not include special characters");
        includeCharacters.includeSpecialCharacter = false;
    }
  }
  specialCharacterConfirmation();
  
  console.log(includeCharacters);


  // Create alert to notify user that they have to choose one character type to include in password
  if (includeCharacters.includeLowercase === false &&
      includeCharacters.includeUppercase === false &&
      includeCharacters.includeNumeric === false &&
      includeCharacters.includeSpecialCharacter === false) {
    alert("Please press OK to at least one character type to include in your password");
  }




  // Create passwordCharacterKey object. using const because values will never change
  const passwordCharacterKey = {
    lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
    uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXY',
    numericCharacters: '0123456789',
    specialCharacters: '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~"'
  }
  console.log(passwordCharacterKey);

  

  // Create a const to group random lowercase, uppercase, numberic, and special to reference for password generator function
  const randomCharacter = [randomLowercase(), randomUppercase(), randomNumeric(), randomSpecial()];


  //Create function to generate random lowercase character 
  function randomLowercase() {
    return passwordCharacterKey.lowercaseCharacters[Math.floor(Math.random() * passwordCharacterKey.lowercaseCharacters.length)];
  }
  console.log(randomLowercase());

  //Create function to generate random uppercase character 
  function randomUppercase() {
    return passwordCharacterKey.uppercaseCharacters[Math.floor(Math.random() * passwordCharacterKey.uppercaseCharacters.length)];
  }
  console.log(randomUppercase());

  //Create function to generate random numeric character 
  function randomNumeric() {
    return passwordCharacterKey.numericCharacters[Math.floor(Math.random() * passwordCharacterKey.numericCharacters.length)];
  }
  console.log(randomNumeric());

  //Create function to generate random special character 
  function randomSpecial() {
    return passwordCharacterKey.specialCharacters[Math.floor(Math.random() * passwordCharacterKey.specialCharacters.length)];
  }
  console.log(randomSpecial());




  










}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
