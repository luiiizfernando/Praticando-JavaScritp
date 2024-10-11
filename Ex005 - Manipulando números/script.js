alert('Seja bem-vindo(a) ao meu site!')

function calcular()
{
    let numero = prompt("Digite um número:")
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `O dobro de ${numero} é ${numero*2} e a metade é ${numero / 2}!`
}