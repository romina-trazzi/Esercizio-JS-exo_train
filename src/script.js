// 1. TrainLetter object
const trainLetter = {
    H: ["<HHHH", "HHHH>"],
    R: "|hThT|",
    P: "|OOOO|",
    C: ["|^^^^|", "|____|"]
}

let userString;

// 2. Create Regex expressions for valid patterns
const regex = /^(?=.*[HRPC])[HRPC]{3,5}$/i

// 3. Check if the user string has a valid pattern
const checkPattern = (userInput) => {
        
    // 3.1. Regex tests
    let regexResult = regex.test(userInput);

    // 3.2. Regex test boolean results
    if (regexResult) {
        ASCII_Train_Generator(userString);
        document.getElementById("train_string").value = ""; // Clear input field
    } else {
        alert("Please try again. Your string pattern is wrong");
    }
}

// Fire the checkPattern function
document.getElementById("print_ASCII").addEventListener("click", () => {
    userString = document.getElementById("train_string").value; // Grab the updated value of the user input string
    checkPattern(userString);
});

// 4. Function that generates and visualizes the Ascii Train code
function ASCII_Train_Generator (userInput) {

    // 4.1. Capitalize and explode the user string in single elements of an array
    let stringSplit = userInput.toUpperCase().split("");

    // 4.2. Compare each letter to the train variables and get train values
    let carriage = [];

    // 4.3. Check if train is a Cargo or a People one
    const cargoCondition = stringSplit.some((letter  => letter === "C"));

    if (cargoCondition) {
        // Algorithm for Cargo train
        carriage.push(trainLetter.H[0]);
        // Conta le C.
        // Se è pieno errore
        // Se è con ristorante o passeggeri, errore
    } else {
        // Algorithm for People train
        stringSplit.forEach((letter, index) => {
            if (index === 0 && letter === "H") {
                carriage.push(trainLetter.H[0]);
            } else if (index === stringSplit.length - 1 && letter === "H") {
                carriage.push(trainLetter.H[1]);
            } else if (letter in trainLetter) {
                carriage.push(trainLetter[letter]);
            }
        });

    }

    // 4.4. Add the separator
    const carriageJoined = carriage.join("::");

    return carriageJoined
}


// 4.5. Write the solution into an HTML paragraph
document.getElementById("result").innerHTML = carriageJoined;    


   
   
