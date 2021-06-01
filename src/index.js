import validator from './validator.js';

let creditCardNumber = document.getElementById("NumberCard1").value;

document.getElementById("Validacion").addEventListener("click",myFunction2);

function myFunction2(){
    validator.maskify(creditCardNumber);
}
//llamamos al boton id=Validacion si esto es ejecutado al hacer "click" se ejecuta la funcion myFunction
document.getElementById("Validacion").addEventListener("click",myFunction);

function myFunction(){
    validator.isvalid(creditCardNumber);
}

