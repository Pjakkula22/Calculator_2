let operand1 = '';
let operand2 = '';
let operator = '';
let isSecondOperand = false;

function pradhyu(){
    const display = document.getElementById('display').value;
    // Regular expression to match the pattern
//const regex = /(\d+)\s*([\+\-\*\/\.])\s*(\d+)/;

// Extracting values using regex
//const match = display.match(regex);

// Variables for the extracted values
/*if (match) {
    const firstNumber = parseFloat(match[1]); // First number
    const operator = match[2]; // Special character
    const secondNumber = parseFloat(match[3]); // Second number*/
    console.log(operand2);
    let result;
    switch (operator) {
        case '+':
            result = (operand1) + (operand2);
            break;
        case '-':
            result = (operand1) - (operand2);
            break;
        case '*':
            result = (operand1) * (operand2);
            break;
                        
        case '/':
            const var1= parseFloat(operand2)
            if (var1 === 0)
            {
                result='Cannot be divided by zero';
            }
            else{
                result = (operand1) / (operand2);
            }
            break;
        default:
            throw new Error('Invalid Operation');
        
    }
    console.log(result);
    document.getElementById('display').value = result;

    

/*else {
    console.log("Invalid input format.");
}*/

}

// Append to the display and manage operands
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (isSecondOperand) {
        operand2 += value;
    } else {
        operand1 += value;
    }
    display.value += value;
}

// Set the operator
function setOperator(op) {
    const display = document.getElementById('display');
    if (!operand1) {
        display.value = 'Error';
        return;
    }
    if (operator) {
        display.value = 'Error';
        return;
    }
    operator = op;
    isSecondOperand = true;
    display.value += op;
}

// Calculate the result
/*function calculateResult() {
    const display = document.getElementById('display');
    try {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
        if (isNaN(num1) || isNaN(num2)) throw new Error('Invalid Input');

        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) throw new Error('Divide by Zero');
                result = num1 / num2;
                break;
            default:
                throw new Error('Invalid Operation');
        }

        display.value = result;
        resetCalculator(result.toString());
    } catch (error) {
        display.value = 'Error';
        resetCalculator();
    }
}
    */

// Clear display and reset state
function clearDisplay() {
    document.getElementById('display').value = '';
    resetCalculator();
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (isSecondOperand && operand2) {
        operand2 = operand2.slice(0, -1);
    } else if (operator && !operand2) {
        operator = '';
        isSecondOperand = false;
    } else {
        operand1 = operand1.slice(0, -1);
    }
}

// Reset the calculator state
function resetCalculator(result = '') {
    operand1 = result;
    operand2 = '';
    operator = '';
    isSecondOperand = false;
}
