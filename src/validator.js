let aux=[];
function maskify(creditCardNumber) {
  let card = creditCardNumber;
  console.log(card);
  aux.push(card[card.length-1]);
  console.log(aux);
  card=card.split("");
  let hideNum = [];
   for(let i = 0; i < card.length; i++){
     if(i < card.length-4){
       hideNum.push("#");
    }
    else{
       hideNum.push(card[i]);
     }
     hideNum.join("");
    }
      return hideNum.join("");
    }  
function isvalid(creditCardNumber){
 // transformamos el NumberCard1 en un array para que cada digito quede separado
 let Box = Array.from(creditCardNumber);
 //se crea el bucle FOR para que recorra cada string ingresado y lo convierta en numero
 for(let i=0;i<creditCardNumber.length;i++){
      // transformamos cada string del bucle a numero
     Box[i]=parseInt(Box[i]);
 }
 //reversamos esta lista de numeros
 let BoxReverse=Box.reverse();
 //con el bucle for tomamos todos los numeros pares
  for(let i=1;i<BoxReverse.length;i=i+2){
    //estos numeros pares los multiplicamoms por 2
   BoxReverse[i]=BoxReverse[i]*2;
   // si resultado de la multiplicacion es mayor a 9 debe sumar 1 más el residuo de ese resultado
   if(BoxReverse[i]>9){ BoxReverse[i]= 1+BoxReverse[i]%10;
  }
 }
 //Volvemos a generar un bucle FOR para tomar todos los numeros ingresados (ya modificados)
 for(let i=0;i<BoxReverse.length;i++)
 //creamos la variable Sum para sumar toda la cadena de numeros del array
 var Sum = (new Function("return " +BoxReverse.join('+')))();
 //creamos la variable resultado donde es igual al residuo de la suma total divido en 10
 var resultado = Sum%10;
 // creamos una condicion donde establece que si el resultado es 0 esto es True y nos crea un alert de tarjeta valida
 if (resultado==0){
  alert("TARJETA VALIDA");
  //si la condicion anterior es falta o distinta a cero sería False y nos crea un alert de tarjeta invalida
} else { alert("TARJETA INVALIDA");
}

 }


  /*cardNumberMaskify = Array.from(creditCardNumber)
   let replaced =  cardNumberMaskify[i].replace(/.(?=.{4,}$)/g, "#");
   document.write(replaced)
  return replaced;*/
    
   
    
  
const validator = {isvalid,maskify,aux};
 export default validator;
