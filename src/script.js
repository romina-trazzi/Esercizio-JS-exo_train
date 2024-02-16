/*=============================================
    =           1. SETTING DATASET            =
=============================================*/

const trainLetterObj = {
    H: ["<HHHH", "HHHH>"],
    R: "|hThT|",
    P: "|OOOO|",
    C: ["|^^^^|", "|____|"]
}

let userString;

let carriage = [];

/*=====  End of Section Setting Dataset ======*/


/*=====================================================================
=            2. CHECK USER STRING PATTERN (ES 6 function)           =
=======================================================================*/

//  Create Regex expressions for valid patterns
const regex = /^(?=.*[HRPC])[HRPC]{3,5}$/i

const checkPattern = (userInput) => {
        
    let regexResult = regex.test(userInput);

    if (regexResult) {
        
        // Timing function & loading message
        document.getElementById("result").textContent = "Generating ASCII train..."; 
        
        // ASCII GENERATOR FUNCTION
        ASCII_Train_Generator(userString);

        // Clear input field 
        resetInputField();
    
    } else {
        alert("Please try again. Your string pattern is wrong");
        resetInputField();
    }
}

/*====  End of Section Check user string pattern  ====*/



/*==============================================================
=       3. GENERATE ASCII TRAIN CODE (ES 5 function)           =
=================================================================*/

function ASCII_Train_Generator (userInput) {
 
    let stringSplit = userInput.toUpperCase().split("");

    // Check if the train is a Cargo or a People one
    let containsCargo = stringSplit.some((letter  => letter === "C"));
    
    if (containsCargo) {
        
        // 3.1. Algorithm for Cargo train
        let cargoContainer = stringSplit.filter((letter => letter === "C"));
        let numberOfCargo = cargoContainer.length;

        // Check for string errors
        if (numberOfCargo > 4) {
            alert("Error: cannot fill a full train");
            resetInputField();
            return
        } else if (!stringSplit.includes('H')) {
            alert("Error: cargo train must have a locomotive");
            resetInputField();
            return
        } else if (stringSplit.includes('R') || stringSplit.includes('P')) {
            alert("Error: this is a Cargo train. R and P are for People trains");
            resetInputField();
            return
        // Create Cargo train
        } else {
            carriage.push(trainLetterObj.H[0]);
            carriage.push(...Array(numberOfCargo).fill(trainLetterObj.C[0]));
        }

    } else {
        // 3.2 Algorithm for People train
        stringSplit.forEach((letter, index) => {
            if (index === 0 && letter === "H") {
                carriage.push(trainLetterObj.H[0]);
            } else if (index === stringSplit.length - 1 && letter === "H") {
                carriage.push(trainLetterObj.H[1]);
            } else if (letter in trainLetterObj) {
                carriage.push(trainLetterObj[letter]);
            }
        });
    }
    
    // Add the separator
    const carriageJoined = carriage.join("::");




/*==  End of Section Generate Ascii Train Code ===*/








// 4. Generate and visualize the Ascii Train code 


    // 4.5. Write the solution into an HTML paragraph
    document.getElementById("result").textContent = carriageJoined; 

}

/*=============================================
    =    4.       FIRING FUNCTIONS            =
==============================================*/

// Fire the checkPattern function
document.getElementById("print_ASCII").addEventListener("click", () => {
    // Grab the updated value of the user input string
    userString = document.getElementById("train_string").value; 
    checkPattern(userString);
});

// Clear input field (ES 6 arrow function)
const resetInputField = () => {
    document.getElementById("train_string").value = "";
}

/*=====  End of Section firing function  ======*/


   


   
   
