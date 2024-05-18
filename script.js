let displayValue ="";

function updateDisplay(){
    document.getElementById('display').value=displayValue;
}

function appendNumber(number)
{
    displayValue+=number;
    updateDisplay();
}

function appendOperator(operator){
    displayValue+=operator;
    updateDisplay();
}

function appendDecimal() {
    // Check if the current number being entered already contains a decimal point
    let lastNumberIndex = displayValue.split(/[-+*/]/).pop().lastIndexOf('.');
    if (lastNumberIndex === -1) {
        // If not, append a decimal point
        displayValue += '.';
        updateDisplay();
    }
}

function calculate(){
    try{
        displayValue=eval(displayValue);
        updateDisplay();
    }
    catch(error)
    {
        displayValue="invalid Syntax";
        updateDisplay();
    }
}

function clearDisplay(){
    displayValue='';
    updateDisplay();
}

