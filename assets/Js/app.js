// Constantes 
const screen = document.querySelector('.screenResult');

// Variables
let first;
let second;
let operation;
let result;


// Funciones principales para imprimir
function impriNumero(numero){
    let number = numero;
    if(number.lenght > 12){
        screen.textContent = 'Sintax Error'
    }else{
        screenCero(number);
    }  
}

function screenCero(numeros){
    screen.textContent === '0' ? screen.textContent = numeros : screen.textContent += numeros;
}

function operations(op){
    first = screen.textContent;
    operation = op;
    screen.textContent = '0';
}

function equals(){
    second = screen.textContent;

    switch (operation) {
        case "+":
            result = parseInt(first) + parseInt(second);
            screen.textContent = result;
            break;
        case "-":
            result = parseInt(first) - parseInt(second);
            screen.textContent = result;
            break;
        case "x":
            result = parseInt(first) * parseInt(second);
            screen.textContent = result;
            break;
        case "/":
            result = parseInt(first) / parseInt(second);
            screen.textContent = result;
            break;
        default:
            break;
    }

    // if(operation === '+'){
    //     result = parseInt(first) + parseInt(second);
    //     screen.textContent = result;
    // }
}

function clearHTML(){
    screen.innerHTML = '0';
}





