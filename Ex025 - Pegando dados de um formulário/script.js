function contagem()
{
    let num = document.getElementById('valor')
    let numero = Number(num.value)
    let resultado = document.getElementById('resultado')

    if (numero < 0 || !Number.isInteger(numero)) {
        alert("Por favor, insira apenas números inteiros e positivos.");
        num.value = '';  // Limpa o campo
    }
    else
    {
        resultado.innerHTML += `<h2> Contando de 0 até ${numero} </h2>`

        for(let i = 0; i <= numero; i++)
        {
            resultado.innerHTML += ` ${i} &#x1F449`
        }
        resultado.innerHTML += ` &#x1F3C1`
    }
}