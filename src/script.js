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
        
        // Timing function & loading message
        document.getElementById("result").innerHTML = "Generating ASCII train..."; 
        
        // Coding function
        ASCII_Train_Generator(userString);

        // Clear input field 
        document.getElementById("train_string").value = "";   
    
    } else {
        alert("Please try again. Your string pattern is wrong");
        document.getElementById("train_string").value = ""; 
    }
}

// Fire the checkPattern function
document.getElementById("print_ASCII").addEventListener("click", () => {
    userString = document.getElementById("train_string").value; // Grab the updated value of the user input string
    checkPattern(userString);
});

// 4. Function that generates and visualizes the Ascii Train code
function ASCII_Train_Generator (userInput) {

    console.log('Start the creation of Ascii train');
    
    // 4.1 Empty Array data tracker
    let carriage = [];
    
    // 4.2. Capitalize and explode the user string in single elements of an array
    let stringSplit = userInput.toUpperCase().split("");

    // 4.3. Check if train is a Cargo or a People one
    const cargoCondition = stringSplit.some((letter  => letter === "C"));
    
    if (cargoCondition) {
        // 4.3.1. Algorithm for Cargo train
        carriage.push(trainLetter.H[0]);

        let cargoContainer = stringSplit.filter((letter => letter === "C"));

        // Check for string errors
        if (cargoContainer.length > 4) {
            alert("Error: cannot fill a full train");
            document.getElementById("train_string").value = ""; 
        } else if (stringSplit.includes('R') || stringSplit.includes('C')) {
            alert("Error: this is a Cargo train. R and P are for People trains");
            document.getElementById("train_string").value = ""; 
        // Create the cargo train
        } else {
            const lengthUserInput = stringSplit.length;
            let totalCargoCarriage = lengthUserInput - cargoContainer.length;
            console.log(totalCargoCarriage);

        }

    } else {
        // 4.3.2 Algorithm for People train
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

    console.log("carriageJoined:", carriageJoined); 

    // 4.5. Write the solution into an HTML paragraph
    document.getElementById("result").textContent = carriageJoined; 
    
    return carriageJoined
}



   


   
   
