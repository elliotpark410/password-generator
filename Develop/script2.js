// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;








  // Create passwordCharacterKey object. using const because values will never change
  const passwordCharacterKey = {
    lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
    uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXY',
    numericCharacters: '0123456789',
    specialCharacters: '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~"'
  }
  console.log(passwordCharacterKey);

  

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

  // Create a const to group random lowercase, uppercase, numberic, and special 
  const randomCharacter = [randomLowercase(), randomUppercase(), randomNumeric(), randomSpecial()];













}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
