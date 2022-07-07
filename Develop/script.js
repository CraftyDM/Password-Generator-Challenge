// Assignment code here
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const digit = "1234567890"

const generatePassword = () => {
  let length = 0
  let charset = "";
  do {
    length = Number(prompt("character count?", "8"))
  } while (length < 8 && length > 128)

  do {
    if (window.confirm("Lowercase characters?")) {
      charset += lowerCase
    }
    if (window.confirm("Uppercase characters?")) {
      charset += upperCase
    }

    if (window.confirm("Special characters?")) {
      charset += special
    }

    if (window.confirm("Number characters?")) {
      charset += digit
    }

  } while (charset.length < 1)
  password = "";

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

