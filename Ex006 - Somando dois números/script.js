function calcular()
{
    let n1 = prompt("Digite um número:")
    let n2 = prompt("Digite outro número:")
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong> ${Number(n1) + Number(n2)}! </strong>`
}