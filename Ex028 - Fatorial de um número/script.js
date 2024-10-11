function fatorial()
{
    let num = document.getElementById('num')
    let numero = Number(num.value)
    let resultado = document.getElementById("resultado")
    let result = 1
    resultado.innerHTML += `<p> <h2> Calculando ${numero}! </h2> </p>`
    for(let i = numero; i >= 1; i--)
    {
        result = result * i;
        if(i > 1)
        {
            resultado.innerHTML += `${i} x `
        }
        else
        {
            resultado.innerHTML += ` ${i} = <strong> ${result.toLocaleString('pt-BR')} </strong>`
        }
    }

}