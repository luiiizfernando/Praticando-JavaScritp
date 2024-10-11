let contador = 0
let resultado = document.getElementById('resultado');

function contar()
{
    contador += 1;
    resultado.innerHTML = `O contador está com <mark> ${contador} </mark> cliques.`
}

function zerar()
{
    contador = 0
    resultado.innerHTML = ''
    //Se quiser que continue mostando o resultado mas com ele zerado, basta apagar o comando de cima e descomentar o comadno abaixo
    //resultado.innerHTML = `O contador está com <mark> ${contador} </mark> cliques.`
}