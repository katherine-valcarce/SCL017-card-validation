import validator from './validator.js';


document.getElementById("NumberCard1").addEventListener("keyup",(e)=>{ 
  let creditCardNumber = e.target.value;
  document.getElementById("NumberCard1").value = validator.maskify(creditCardNumber);
});
//llamamos al boton id=Validacion si esto es ejecutado al hacer "click" se ejecuta la funcion myFunction
document.getElementById("Validacion").addEventListener("click",()=> { 
    let creditCardNumber = validator.aux;
    if (validator.isValid(creditCardNumber)==true){
        alert("TARJETA VALIDA");
    }else{
        alert("TARJETA INVALIDA")
    }
    
    /*validator.isValid(creditCardNumber);*/
});

