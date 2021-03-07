 
 
 //input de entrada do valor de ganho mensal
 var entradaGanho = document.querySelector("#ganho-mes")
  //input de entrada das horas trabalhadas por dia 
  var horas = document.querySelector("#horas-dia")

  //Função que calcula os valores de acordo com os valores inseridos nos inputs
function calcularValorHora() {
    
      //valor  digitado no input de ganho mensal
    var ganhoMensal = entradaGanho.valueAsNumber 


   //valor digitado no input de horas por dia
     var horasDia = horas.valueAsNumber

     //seleção do texto de resposta 
 var resposta =  document.querySelector("#resposta")
  
 //calcular o valor pago por hora
  var valor = (ganhoMensal/22)/horasDia

    //alterar o texto para o valor do resultado 
     resposta.textContent = "R$ " +valor.toFixed(2)
       


 

}