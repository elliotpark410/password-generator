// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables for password character key 
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
var numericCharacters = '0123456789';
var specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~"';

// Create placeholders for password length and character types to incude in the password
var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumeric;
var includeSpecialCharacter;


// Write all code under generatePassword function because that is associated with event listener button
function generatePassword() {

  // Create function prompt for password length prompt that must include an integer between 8 - 128
  function passwordLengthPrompt() {
    var passwordLengthInput = prompt("Please choose how many characters you would like your password to contain between 8-128 characters");


    if (passwordLengthInput === null || passwordLengthInput === "") {
      alert("Password generator must include how many characters you would like your password to contain")
      passwordLengthPrompt();
      // NEED TO STOP FUNCTION SO IT RETURNS TO BEFORE FUNCTION
    } else if (passwordLengthInput > 128) {
      alert("Password must be less than 128 characters");
      passwordLengthPrompt();
    } else if (passwordLengthInput < 8) {
      alert("Password must be more than 7 characters");
      passwordLengthPrompt();
    } else if (isNaN(passwordLengthInput)) {
      alert("Password must be a number between 8 and 128 characters");
      passwordLengthPrompt();
    } else {
      passwordLength = passwordLengthInput;
    }
    return passwordLength;
  }
  passwordLengthPrompt();
  console.log("passwordLength: " + passwordLength);
  

  // Create confirmation for lowercase and change includeLowercase to true if user press OK and false if user press cancel
  function lowercaseConfirmation() {
    var lowercaseConfirmationInput = confirm("Click OK to include lowercase characters");

    if (lowercaseConfirmationInput) {
      console.log("user hit ok to include lowercase");
      includeLowercase = true;
      return includeLowercase;

    } else {
      console.log("user hit cancel to not include lowercase");
      includeLowercase = false;
      return includeLowercase;
    }
  return includeLowercase; 
  }
  lowercaseConfirmation();
  console.log("includeLowercase: " + includeLowercase);

  






  // Create confirmation for uppercase and change includeUppercase to true if user press OK and false if user press cancel
  function uppercaseConfirmation() {
    var uppercaseConfirmationInput = confirm("Click OK to include uppercase characters");

    if (uppercaseConfirmationInput) {
      console.log("user hit ok to include uppercase");
      includeUppercase = true;
      return includeUppercase;

    } else {
      console.log("user hit cancel to not include uppercase");
      includeUppercase = false;
      return includeUppercase;
    }
  return includeUppercase; 
  }
  uppercaseConfirmation();
  console.log("includeUppercase: " + includeUppercase);
  



  // Create confirmation for numeric and change includeNumeric to true if user press OK and false if user press cancel
  function numericConfirmation() {
    var numericConfirmationInput = confirm("Click OK to include numeric characters");

    if (numericConfirmationInput) {
      console.log("user hit ok to include numeric characters");
      includeNumeric = true;
      return includeNumeric;

    } else {
      console.log("user hit cancel to not include numeric characters");
      includeNumeric = false;
      return includeNumeric;
    }
  return includeNumeric;
  }
  numericConfirmation();
  console.log("includeNumeric: " + includeNumeric);
  



  // Create confirmation for specialCharacters and change includeSpecialCharacter to true if user press OK and false if user press cancel
  function specialCharactersConfirmation() {
    var specialCharactersConfirmationInput = confirm("Click OK to include special characters");

    if (specialCharactersConfirmationInput) {
      console.log("user hit ok to include special characters");
      includeSpecialCharacter = true;
      return includeSpecialCharacter;

    } else {
      console.log("user hit cancel to not include special characters");
      includeSpecialCharacter = false;
      return includeSpecialCharacter;
    }
  return includeSpecialCharacter;   
  }
  specialCharactersConfirmation();
  console.log("includeSpecialCharacter: " + includeSpecialCharacter);
  



  





  // Create alert window to notify user that user have to choose one character type to include in password
  function noCharactersIncluded() {
    if (includeLowercase === false &&
      includeUppercase === false &&
      includeNumeric === false &&
      includeSpecialCharacter === false) {
      alert("Please press OK to at least one character type to include in your password");
      console.log("user did not press Ok to any character types");
      lowercaseConfirmation();
      uppercaseConfirmation();
      numericConfirmation();
      specialCharactersConfirmation();
      noCharactersIncluded();
    }
  } 
  noCharactersIncluded();
 



  

    var randomPassword = "";
    var includedCharacters = "";

    if (includeUppercase && includeNumeric && includeSpecialCharacter) {
      includedCharacters += uppercaseCharacters + numericCharacters + specialCharacters;
    
    } else if (includeUppercase && includeSpecialCharacter) {
      includedCharacters += uppercaseCharacters + specialCharacters;

    } else if (includeUppercase && includeNumeric) {
      includedCharacters += uppercaseCharacters + numericCharacters;

    } else if (includeNumeric && includeSpecialCharacter) {
      includedCharacters += numericCharacters + specialCharacters;
    
    } else if (includeUppercase) {
      includedCharacters += uppercaseCharacters;
    
    } else if (includeNumeric) {
      includedCharacters += numericCharacters;

    } else if (includeSpecialCharacter) {
      includedCharacters += specialCharacters;

    } else {
      includedCharacters === lowercaseCharacters;
    }

    // generate randompassword with for loop and char at method - returns the character at a specified position
    for (let i = 0; i < passwordLength; i++) {
      randomPassword += includedCharacters.charAt(Math.floor(Math.random() * includedCharacters.length));
    }
    return randomPassword;
  } 
    

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
