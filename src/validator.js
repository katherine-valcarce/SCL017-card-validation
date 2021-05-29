const validator = {
  isvalid:function(){
let NumberCard1 = document.getElementById("NumberCard1").value;
let Box = Array.from(NumberCard1);
let NumberSum=0;

 for(let i=0;i<NumberCard1.length;i++){
  Box[i]=parseInt(Box[i]);
 }
 Box=Box.reverse();

  for(let i=1;i<Box.length;i=i+2){
   Box[i]=Box[i]*2;
   if(Box[i]>9){ Box[i]= 1+Box[i]%10;
  }
 }

 for(let i=0;i<Box.length;i++)

var Sum = (new Function("return " +Box.join('+')))();
var resultado = Sum%10;

if (resultado==0){
  alert("TARJETA VALIDA");
} else { alert("TARJETA INVALIDA")
}

 },

};


export default validator;
