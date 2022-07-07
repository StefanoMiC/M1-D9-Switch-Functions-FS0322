let generateHeader = function (string, symbol, numberOfRepetitions) {
  console.log("\n" + symbol.repeat(numberOfRepetitions) + string + symbol.repeat(numberOfRepetitions));
};

generateHeader("SWITCH STATEMENT", "=", 10);
// Suppose the user can select the language of our website
// And we receive the value from the option of the select (dropdown)
let selectedLanguage = "FR";

// Greet the person in his/her own language

// if (selectedLanguage === "EN") {
//   console.log("Good morning, Welcome to our website!");
// } else if (selectedLanguage === "IT") {
//   console.log("Buongiorno, Benvenuti sul nostro sito");
// } else if (selectedLanguage === "ES") {
//   console.log("Buenos dias,.....");
//   console.log("Bonjour!");
// } else if (selectedLanguage === "FR") {
//   console.log("Bonjour!");
// } else {
//   // this will happen in case of a not supported language being selected
//   console.log("Language not supported!");
// }

switch (
  selectedLanguage // the value we are checking against (for equality)
) {
  case "EN": // this is the value that will be evaluated against the initial condition
    console.log("Good morning, Welcome to our website!");
    break;
  case "IT":
    console.log("Buongiorno, Benvenuti sul nostro sito");
    break;
  case "ES":
    console.log("Buenos dias,.....");
    break;
  case "FR":
    console.log("Bonjour!");
    break;
  default:
    console.log("Language not supported!");
    break;
}

let userName = "Miles";
let greeting;

switch (userName) {
  case "Jeffrey":
    greeting = "Good morning, Jeffrey";
    break;
  case "Francesco":
    greeting = "Buongiorno Francesco!";
    break;
  case "Miles":
    greeting = "hey Miles!";
    break;
  case "Brandon":
    greeting = "what up Brandon!?";
    break;
  default:
    greeting = `Nice to see you ${userName}! Have a good day!`;
}

console.log(greeting);

// this would translate to:

// if (userName === "Jeffrey") {
//   greeting = "Good morning, Jeffrey";
// } else if (userName === "Francesco") {
//   greeting = "Buongiorno Francesco!";
// }

// you can see how the switch case is better than this

generateHeader("LOOPS", "=", 3);
// console.log("\n-----------------LOOPS -----------------");

// MANUAL REPETITIONS
// 1. not flexible
// 2. extremely error-prone
// 3. extremely boring!
generateHeader("MANUAL REPETITIONS", "=", 10);
// console.log("\n-----------------MANUAL REPETITIONS -----------------");
console.log("Number - 1");
console.log("Number - 2");
console.log("Number - 3");
console.log("Number - 4");
console.log("Number - 5");
console.log("Number - 6");
console.log("Number - 7");
console.log("Number - 8");
console.log("Number - 9");
console.log("Number - 10");

generateHeader("WHILE LOOP", "=", 10);
// console.log("\n-----------------WHILE LOOP -----------------");
// WHILE loop executes a BLOCK of code AS LONG AS THE CONDITION IS MET

let currentNumber = 1;
let amountOfIterationsToRun = 10;

while (currentNumber <= amountOfIterationsToRun) {
  console.log("Number is -", currentNumber);
  currentNumber++;
}

console.log("While loop finished");

generateHeader("DO...WHILE LOOP", "=", 10);
// console.log("\n-----------------DO...WHILE LOOP -----------------");

// Pretty much identical to the WHILE, except it will perform the check AT THE END of each iteration
// That's why the block of code will execute AT LEAST ONCE, even if the condition is never met
// set 'amountOfIterationsToRun = 0 and we'll see the difference

currentNumber = 1;
do {
  console.log("Number ALT -", currentNumber);
  currentNumber++;
} while (currentNumber <= amountOfIterationsToRun);

console.log("Do...While loop finished");

generateHeader("FOR LOOP", "=", 10);
// console.log("\n-----------------FOR LOOP -----------------");

for (currentNumber = 1; currentNumber <= amountOfIterationsToRun; currentNumber++) {
  console.log("Number FROM FOR LOOP -", currentNumber);
}

console.log("For loop finished", "=");

let arrayOfAnimals = ["Dog", "Cat", "Mouse", "Rabbit", "Alligator"];

console.log(arrayOfAnimals[0]);
console.log(arrayOfAnimals[1]);
console.log(arrayOfAnimals[2]);
console.log(arrayOfAnimals[3]);
console.log(arrayOfAnimals[4]);
// console.log(arrayOfAnimals[5]);

for (let index = 0; index < arrayOfAnimals.length; index++) {
  let animal = arrayOfAnimals[index];

  console.log(animal);
}

console.log("For loop ANIMALS finished");

generateHeader("ENUMERATING AN ARRAY (SIMPLER BUT KEEP USING THE FOR LOOP)", "=", 10);
// console.log("\n-----------------ENUMERATING AN ARRAY (SIMPLER BUT KEEP USING THE FOR LOOP) -----------------");
// this is EXACTLY identical to the alternative above,
// it's just HIDING some of the complexity, such as:
// - declaring an 'index' variable to keep track of the iteration count
// - checking the condition
// - increasing the 'index' variable after every iteration

for (let animal of arrayOfAnimals) {
  console.log(animal);
}

console.log("For...of ANIMALS finished");

// !!!! PAY ATTENTION !!!!!!

// WE USE FOR...OF!

// NOT FOR...IN, don't use this!
// it's a legacy thing, still available but quite buggy and counter-intuitive.

let person = {
  name: "Stefano",
  surname: "Miceli",
  role: ["Admin", "Teacher", "Maintainer"],
};

let objectKeys = Object.keys(person);
let objectEntries = Object.entries(person);

console.log(objectKeys);
console.log(objectEntries);

for (let key of objectKeys) {
  console.log(person[key]);
}

for (let i = 0; i < objectKeys.length; i++) {
  let key = objectKeys[i];
  console.log(person[key]);
}

generateHeader("ACESSING STRING CONTENT", "=", 10);

let helloEpicodersString = "Hello Epicoders!"; // Strings behave like arrays of characters
// index:                   0123456789....

let expandedString = "";

for (let i = 0; i < helloEpicodersString.length; i++) {
  let currentCharacter = helloEpicodersString[i];
  if (currentCharacter === " ") {
    break;
  }

  if (currentCharacter === "l") {
    continue;
  }

  console.log(currentCharacter);

  expandedString += currentCharacter;
  expandedString += " ";
}

// H e l l o  E p i c o d e r s !
console.log(expandedString);

generateHeader("VARIABLES SCOPES", "=", 10);
// console.log("\n-----------------VARIABLES SCOPES-----------------");

//  var hello = "some other hello" // DON'T EVER EVER USER VAR
let hello = "hello";

if (true) {
  // this is the local variable, will take precedence over the outer one
  let hello = "HEYYY"; // this will NOT overwrite the variable with the same name in the root scope
  console.log(hello); // this will read "HEYY"
}
console.log(hello); // this will read "hello"

generateHeader("LET VS CONST", "=", 10);
// console.log("\n-----------------LET VS CONST-----------------");

hello = "yet another hello!";

console.log(hello); // this will read "yet another hello!"

const myUnchangeableVariable = "FIXED";

// myUnchangeableVariable = "CHANGED?";
console.log(myUnchangeableVariable); // TypeError: Assignment to constant variable.

// This will throw an error in case of the content changes completely (eg. changing a String to String or String to Boolean etc..)

const objectOfPerson = {
  name: "Paul",
};
console.log(objectOfPerson.name);

objectOfPerson.name = "Brandon";

console.log(objectOfPerson);
// objectOfPerson = null;

const newArr = [0, 2, 3, 4, 5];
console.log(newArr);

newArr.pop();

// newArr = "Something else";
console.log(newArr);

let str = "The quick brown fox jumps over the lazy dog.";

let words = str.split(" ");

let sentence = "";

for (let i = 0; i < words.length; i++) {
  let capitalizedWord = "";
  let word = words[i];

  capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1) + " ";
  sentence += capitalizedWord;

  console.log(capitalizedWord);
}

console.log(sentence);

generateHeader("CREATING OUR OWN FUNCTION", "=", 10);
// console.log("\n-----------------CREATING OUR OWN FUNCTION-----------------");

generateHeader("FRUITFUL FUNCTION", "=", 10);
// console.log("\n-----------------FRUITFUL FUNCTION-----------------");

function sayHi(s) {
  let greet = "Hello " + s + "!";

  return greet;
}

console.log(sayHi("John"));
console.log(sayHi("Paul"));
console.log(sayHi("Francesco"));

let greeted = sayHi("Jeffrey");
console.log(greeted);

generateHeader("VOID FUNCTION", "^", 20);
// console.log("\n-----------------VOID FUNCTION-----------------");

let total = 0;

function sideEffect(iterationsCount) {
  for (let i = 0; i < iterationsCount; i++) {
    total++;
  }
}

console.log("Before Executing", total);

sideEffect(50);
sideEffect(10);

console.log("After  Executing", total);

let anotherFunction = function () {
  console.log("hey");
};

anotherFunction();
