function primeiroNumero()
{
    let n1 = prompt("Primeiro valor:")
    while (isNaN(n1) || n1 == '')
    {
        alert("Número digitado é inválido")
        n1 = prompt("Primeiro valor:")
    }
    
    return n1
}

function SegundoNumero()
{
    let n2 = prompt("Segundo valor: ")
    while (isNaN(n2) || n2 == "")
    {
        alert("Número digitado é inválido")
        n2 = prompt("Segundo valor:")
    }

    return n2
}

function calcular ()
{
    let n1 = primeiroNumero()
    let n2 = SegundoNumero()
    let resultado = document.getElementById('resultado')
    let calculando = document.getElementById('calculando')
    let opcao = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    while(opcao < 1 || opcao > 4)
    {   
        alert("Opção inválida. Digite entre 1 e 4.")
        opcao = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    }
    if(opcao == 1)
    {
        calculando.innerHTML = `<calculando>Calculando...</calculando>`
        resultado.innerHTML = `<p>${n1} + ${n2} = <strong> ${Number(n1) + Number(n2)} </strong> </p>`
    }
    else if(opcao == 2)
    {
        calculando.innerHTML = `<calculando>Calculando...</calculando>`
        resultado.innerHTML = `<p>${n1} - ${n2} = <strong> ${Number(n1) - Number(n2)} </strong> </p>`
    }
    else if(opcao == 3)
    {
        calculando.innerHTML = `<calculando>Calculando...</calculando>`
        resultado.innerHTML = `<p>${n1} x ${n2} = <strong> ${Number(n1) * Number(n2)} </strong> </p>`
    }
    else
    {
        while(Number(n2) == 0)
        {
            alert("Erro: Divisão por zero não é permitida. Por favor, insira um divisor diferente de 0.")
            n2 = SegundoNumero()        
        }
        calculando.innerHTML = `<calculando>Calculando...</calculando>`
        resultado.innerHTML = `<p>${n1} / ${n2} = <strong> ${Number(n1) / Number(n2)} </strong> </p>`
    }
}