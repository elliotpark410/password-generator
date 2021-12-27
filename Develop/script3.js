// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create var called passwordCharacterKey with object storing potential password characters
var passwordCharacterKey = {
  lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
  uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXY',
  numericCharacters: '0123456789',
  specialCharacters: '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~"'
}

// Create variables to save results from functions 
var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumeric;
var includeSpecialCharacters;



// Create function prompt for password length prompt
function passwordLengthPrompt() {
  var passwordLengthInput = prompt("Please choose how many characters you would like your password to contain between 8-128 characters");

  if (passwordLengthInput > 128) {
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
// passwordLengthPrompt();
console.log("passwordLength: " + passwordLength);



// Create confirmation for lowercase
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
// lowercaseConfirmation();



// Create confirmation for uppercase
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
// uppercaseConfirmation();



// Create confirmation for numeric
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
// numericConfirmation();



// Create confirmation for specialCharacters
function specialCharactersConfirmation() {
  var specialCharactersConfirmationInput = confirm("Click OK to include special characters");

  if (specialCharactersConfirmationInput) {
    console.log("user hit ok to include special characters");
    includeSpecialCharacters = true;
    return includeSpecialCharacters;

  } else {
    console.log("user hit cancel to not include special characters");
    includeSpecialCharacters = false;
    return includeSpecialCharacters;
  }
  return includeSpecialCharacters;
}
// specialCharactersConfirmation();











  // Create an includeCharacters var to determine which functions to use in generate password
  var includeCharacters = {
    includeLowercase: true,
    includeUppercase: true,
    includeNumeric: true,
    includeSpecialCharacter: true
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


  // Create alert window to notify user that they have to choose one character type to include in password
  if (includeCharacters.includeLowercase === false &&
      includeCharacters.includeUppercase === false &&
      includeCharacters.includeNumeric === false &&
      includeCharacters.includeSpecialCharacter === false) {
    alert("Please press OK to at least one character type to include in your password");
  }






  

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





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;









}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
