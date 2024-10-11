function maiorNumero()
{
    let n1 = Number(prompt('Digite um número'))
    let resultado = document.getElementById("resultado")
    while(isNaN(n1) || n1.trim === "")
    {
        alert("Você não digitou um número válido.")
        n1 = Number(prompt('Digite um número'))
    }
    let n2 = Number(prompt('Digite outro número:'))
    while(isNaN(n2) || n2.trim === "")
    {
        alert("Você não digitou um número válido.")
        n2 = Number(prompt('Digite outro número:'))
    }

    if(n1 > n2)
    {
        resultado.innerHTML = `Analisando os valores <mark> ${n1} </mark> e <mark> ${n2} </mark>, o maior valor é <strong> ${n1} </strong>`
    }
    else if(n2 > n1)
    {
        resultado.innerHTML = `Analisando os valores <mark> ${n1} </mark> e <mark> ${n2} </mark>, o maior valor é <strong> ${n2} </strong>`
    }
    else
    {
        resultado.innerHTML = `Analisando os valores <mark> ${n1} </mark> e <mark> ${n2} </mark>, ambos são <strong> IGUAIS </strong>`
    }
    
}