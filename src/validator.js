let aux=[];   // declaramos la variable let que va a contener todos los cambios que haremos en el numero ingresado
function maskify(creditCardNumber) {
  let card = creditCardNumber.replace(" ","");; // declaramos la variable card para obtener el numero ingresado
  aux.push(card[card.length-1]); // cada numero que sea ingresado sera agregado a la variable aux 
  card=card.split("");   // dividimos la cadena ingresada "card" en una matriz de subcadenas
  let hideNum = [];  // creamos la variable que ocultará los numeros 
   for(let i = 0; i < card.length; i++){ // recorremos cada caracter ingresado 
     if(i < card.length-4){  // si la posicion es menor a "la longitud de la cadena menos 4" se debe reemplazar el caracter por #
       hideNum.push("#");
    }
    else{                       // si no (los ultimos 4 digitos) será agregado el numero ingresado
       hideNum.push(card[i]);
     }
     hideNum.join("");  //ahora todos los caracteres de esta matriz los unimos en una cadena
    }
      return hideNum.join("");
    }  
function isValid(creditCardNumber){
  let booleano = "";  //Declaramos la variable booleano para que al final nos entregue el resultado
 let Box = Array.from(creditCardNumber);  // transformamos el NumberCard1 en un array para que cada digito quede separado
 for(let i=0;i<creditCardNumber.length;i++){  
     Box[i]=parseInt(Box[i]);   //se crea el bucle FOR para que recorra cada string ingresado y lo convierta en numero
 } //Algoritmo de Luhn
 let BoxReverse=Box.reverse(); //reversamos esta lista de numeros ingresados
  for(let i=1;i<BoxReverse.length;i=i+2){  //con el bucle for tomamos todos los numeros pares
   BoxReverse[i]=BoxReverse[i]*2;    //estos numeros pares los multiplicamoms por 2
   if(BoxReverse[i]>9){ BoxReverse[i]= 1+BoxReverse[i]%10;  // si resultado de la multiplicacion es mayor a 9 debe sumar 1 más el residuo de ese resultado
  }
 }
 for(let i=0;i<BoxReverse.length;i++)  //Volvemos a generar un bucle FOR para tomar todos los numeros ingresados (ya con los numeros pares tratados)
 var Sum = (new Function("return " +BoxReverse.join('+')))(); //creamos la variable Sum para sumar toda la cadena de numeros del array
 var resultado = Sum%10; //creamos la variable resultado donde es igual al residuo de la suma total divido en 10
 // creamos una condicion donde establece que si el resultado es 0 esto es True y nos crea un alert de tarjeta valida
 if (resultado==0){ 
   booleano = true;  // si la operacion de la variable resultado da igual a 0; la variable booleano será verdadera  
} else { booleano = false; } // si la operacion de la variable resultado es distinta a 0; la variable booleano será falsa
return booleano;  
 }

    
  
const validator = {aux,isValid,maskify};
 export default validator;
