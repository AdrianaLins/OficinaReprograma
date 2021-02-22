//Realizando o input e armazenando valor-hora do projeto
var valorHoraDoProjeto = document.querySelector("#valor-hora");

//Realizando o input e armazenando as horas do projeto
var horasDoProjeto = document.querySelector("#horas-projeto");

//Realizando o input e armazenando o resultado
var resultadoProjeto = document.querySelector("#resposta");


//Função para calcular o valor do projeto
function calcular() {

    var valorTotalProjeto = Number(valorHoraDoProjeto.value * horasDoProjeto.value).toFixed(2).replace('.',',');
    
    resultadoProjeto.textContent = `Valor total do seu projeto é R$ ${valorTotalProjeto}`;

}


