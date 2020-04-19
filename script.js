// Assignment Code
var generateBtn = document.querySelector("#generate");

function shuffle(s)
{
  var arr = s.split('');
  var n = arr.length;
  
  for(var i=0 ; i<n-1 ; ++i) {
    var j = Math.floor(Math.random() * n);
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');
  return s;
}

function generatePassword() {
  // get password length
  var passwordlength = prompt("Enter a password length between 8 and 128");
  while (isNaN( passwordlength ) || passwordlength<8 || passwordlength>128){
    passwordlength = prompt("Try again. Enter a password length between 8 and 128");
  }

  // get password options
  var islowercase = confirm("Lowercase letters?");
  var isuppercase = confirm("Uppercase letters?");
  var isnumeric = confirm("Numerics?");
  var isspecialchar = confirm("Special characters?");

  // validation
  while (islowercase === false && isnumeric === false && isuppercase === false && isspecialchar === false){
    alert("Please select at least one option. Try again");
    islowercase = confirm("Lowercase letters?");
    isuppercase = confirm("Uppercase letters?");
    isnumeric = confirm("Numerics?");
    isspecialchar = confirm("Special characters?");
  }

  var specialchar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var required = "";
  var optional = "";

  if(isuppercase) {
    var randomnumber = Math.floor(Math.random() * uppercase.length); 
    required += uppercase.charAt(randomnumber);
    optional += uppercase;
  }
  if(islowercase) {
    var randomnumber = Math.floor(Math.random() * lowercase.length); 
    required += lowercase.charAt(randomnumber);
    optional += lowercase;
  }
  if(isnumeric) {
    var randomnumber = Math.floor(Math.random() * numbers.length); 
    required += numbers.charAt(randomnumber);
    optional += numbers;
  }
  if(isspecialchar) {
    var randomnumber = Math.floor(Math.random() * specialchar.length); 
    required += specialchar.charAt(randomnumber);
    optional += specialchar;
  }

  var midpassword = required;
  for (var i=required.length; i<passwordlength; i++){
    var randomnumber = Math.floor(Math.random() * optional.length); 
    midpassword+= optional.charAt(randomnumber);
  }

  var pass = shuffle (midpassword);
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);