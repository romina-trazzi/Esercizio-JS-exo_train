// 1. TrainLetter object
const trainLetter = {
    H: ["<HHHH", "HHHH>"],
    R: "|hThT|",
    P: "|OOOO|",
    C: ["|^^^^|", "|____|"]
}

let userString;

// 2. Create Regex expression for valid patterns
const regex = /^(?=.*[HRPC])[HRPC]{3,5}$/i

// 3. Check if the user string has a valid pattern
const checkPattern = (userInput) => {
    
    // 1. Grab the whole user input value
    userString = document.getElementById("train_string").value;
    
    // 2. Regex test
    let regexResult = regex.test(userInput);

    // 3. Regex test boolean results
    if (regexResult) {
        ASCII_Train_Generator(userString);
        document.getElementById("train_string").value = ""; // Clear input field
    } else {
        alert("Please try again. Your string pattern is wrong");
    }
}

// 3. Fire the checkPattern function
document.getElementById("print_ASCII").addEventListener("click", () => checkPattern(userString)); 


// 4. Function that generates and visualizes the Ascii Train code
function ASCII_Train_Generator (userInput) {

    // 1. Capitalize and explode the user string in single elements of an array
    let stringSplit = userInput.toUpperCase().split("");

    // 2. Compare each letter to the train variables and get train values
    let carriage = [];
    
    stringSplit.forEach((letter, index) => {
        if (index === 0 && letter === "H") {
            carriage.push(trainLetter.H[0]);
        } else if (index === stringSplit.length - 1 && letter === "H") {
            carriage.push(trainLetter.H[1]);
        } else if (letter in trainLetter) {
            carriage.push(trainLetter[letter]);
        }
    });
    
    // 3. Add the separator
    const carriageJoined = carriage.join("::");

 
    // 4. Write the solution into an HTML paragraph
    document.getElementById("result").innerHTML = carriageJoined;

}
    


   
   
  





 // 1. Store the number of the letters
    // let carriageQuantity = userInput.length;