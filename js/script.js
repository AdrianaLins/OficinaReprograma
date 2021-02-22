//armazendo quanto ganha por mes
var inputGanhoPorMes = document.querySelector('#ganho-mes');

//armazenando as horas por dia trabalhadas
var inputHorasPorDia = document.querySelector('#horas-dia');

//armazenando a resposta
var spanHora = document.querySelector('#resposta');


//função para calcular o valor/hora 
function calcularValorHora() {
    var qtdTotalDeHoras = inputHorasPorDia.valueAsNumber * 22;

    var valorDeHora = (inputGanhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2)

    spanHora.textContent = "R$" + valorDeHora;

}

