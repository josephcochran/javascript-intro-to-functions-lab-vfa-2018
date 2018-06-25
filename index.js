function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  var lowercase = string;
  var mixedcase = string;
  var uppercase = string;
  lowercase.toLowerCase() === lowercase;
  mixedcase.toLowerCase() === mixedcase;
  /*if (lowercase=true)
  return("I can't hear you!");
  if (mixedcase=false)
  return("I can't hear you!");*/
  uppercase.toUpperCase() === uppercase;
  if (uppercase=true)
  return("YES INDEED!");
  
  var love = string;
  if (love = "I love you, Grandma.")
  return("I love you, too.");
} 

/*function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase
  if (uppercase=true)
  return("YES INDEED!");
}

function sayHiToGrandma(string) {
  var love = "I love you, Grandma."
  if (love="I love you,Grandma.")
  return("I love you, too.")
}*/