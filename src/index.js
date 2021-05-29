import validator from './validator.js';

document.getElementById("Validacion").addEventListener("click",myFunction);

function myFunction(){
    validator.isvalid();
    validator.maskify();
}

console.log(validator);
