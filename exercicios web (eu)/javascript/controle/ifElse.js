const ImprimirResultado = function(nota){
  if(nota >= 7){
    console.log('Aprovado');
  } else{
    console.log('Reprovado');
  }
}

ImprimirResultado(10)
ImprimirResultado(4)
ImprimirResultado('Epa!') //cuidado!!!