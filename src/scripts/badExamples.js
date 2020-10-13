function canUserDriveACar(age) {
  // This variable is needed to store information about
  // user age in years
  var a = 0;

  // Now we set 
  a = 18;

  if (age > a) {
    return true;
  } else {
    return false;
  }
}

// If it was not clear they are allowed
const allowed = {
  "1": true,
  "2": true,
  "3": true,
  "4": true,
  "5": true,
  "6": true,
  "7": true,
  "8": true,
  "9": true,
  "0": true,
  ArrowLeft: true,
  ArrowDown: true,
  ArrowRight: true,
  ArrowUp: true,
  Backspace: true,
  ".": true
};

const isValidInput = allowed[key];

// When null is not null
const newReply = reply !== null ? reply : null;

// Evergreen
return isDisabled == false ? false : true;

//Calculates x² of an integer up to ±1 million
var square = (function() {
  var s = "if(A==B){return C;}";
  var func = "var A=Math.abs(D|0);";
  for (var i = 0; i <= 1000000; i++) {
    func += s.replace(/B/, i).replace(/C/, i * i);
  }
  return new Function("D", func + "return Infinity;");
})();

// Check if is a valid number
function IsNumeric(sText) {
  var ValidChars = "0123456789.";
  var IsNumber = true;
  var Char;
  for (i = 0; i < sText.length && IsNumber == true; i++) {
    Char = sText.charAt(i);
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

const ITEM_COUNT = 100;
let visibleItems = [];
for (let i = 0; i < ITEM_COUNT; ++i) {
  visibleItems.push(false);
}

function showItem(index) {
  visibleItems = [];
  for (let i = 0; i < ITEM_COUNT; ++i) {
    visibleItems.push(false);
  }
  visibleItems[index] = true;
}
