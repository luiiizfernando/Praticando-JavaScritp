function ParOuImpar()
{
    let numero = prompt("Digite um número:")
    let resultado = document.getElementById('resultado')
    if(numero % 2 == 0)
    {
        resultado.innerHTML = `O número ${numero} que foi digitado é <strong> PAR!</strog>`
    }
    else
    {
        resultado.innerHTML = `O número ${numero} que foi digitado é <strong> ÍMPAR!</strog>`
    }
}