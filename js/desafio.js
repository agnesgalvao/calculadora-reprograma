


var inputValorPorHora = document.querySelector("#valor-hora") //input que recebe o valor por hora

var inputHorasProjeto = document.querySelector("#horas-projeto") // inputt que recebe a quantdade de horas
var resposta = document.querySelector("#respostafinal") // seleciona o texto de resposta



//função que calcula os valores
function calcularValorProjeto(){

    // recebe o valor digitado no input valor por hora
var valorHora = inputValorPorHora.valueAsNumber


//recebe o valor digitado no input horas do projeto
var horasProjeto =  inputHorasProjeto.valueAsNumber

//calcula o valor final
var valorFinal =  valorHora * horasProjeto

//altera o texto pra o resultado
resposta.textContent = "R$"+ valorFinal





}