/*=============================================
    =           1. SETTING DATASET            =
===============================================*/

const trainLetterObj = {
    H: ["<HHHH", "HHHH>"],
    R: "|hThT|",
    P: "|OOOO|",
    C: ["|^^^^|", "|____|"]
}

let userString;

let userTrainLetterObj = {};

let resultParagraph = document.getElementById("result"); 

/*=====  End of Section Setting Dataset ======*/


/*=================================================================
=        2. CHECK USER STRING PATTERN (ES 6 arrow function)      =
===================================================================*/

//  Create Regex expressions for valid patterns
const regex = /^(?=.*[HRPC])[HRPC]{3,5}$/i

const checkPattern = (userInput) => {    
    let regexResult = regex.test(userInput);

    if (regexResult) {
        document.getElementById("result").textContent = "Generating ASCII train..."; 

        // Generate Ascii train code with delay
        setTimeout(() => ASCII_Train_Generator(userString), 1000);

    } else {
        alert("Please try again. Your string pattern is wrong");
        resetInputField();
    }
}


/*==============================================================
=       3. GENERATE ASCII TRAIN CODE (ES 5 function)           =
=================================================================*/

function ASCII_Train_Generator (userInput) {
    let carriage = [];
 
    let stringSplit = userInput.toUpperCase().split("");



}


/*===========================================
=    4.       FIRING FUNCTIONS            =
=============================================*/

// Fire the checkPattern function
document.getElementById("print_ASCII").addEventListener("click", () => {
    // Grab the updated value of the user input string
    userString = document.getElementById("train_string").value; 
    checkPattern(userString);
});

// Clear input field 
const resetInputField = () => {
    document.getElementById("train_string").value = "";
    resultParagraph.textContent = "";
}
/*====  End of Section Check user string pattern  ====*/