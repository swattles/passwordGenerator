// Assignment Code
var generateBtnEl = document.querySelector("#generate-btn");

// Returns random characters, including alphanumeric and special character values
function getCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Generates the password as a string of characters of specified length (num)
function createPassword(num) {
  var password = '';
  for (var i =0; i < num; i++) {
    password += getCharacters();
  }
  return password;
}

// Write password to the #password input
function writePassword () {
    var newPassword = createPassword(15); 
    var passwordDisplayEl = document.querySelector("#password-display");

    passwordDisplayEl.value = newPassword;
}

// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword);