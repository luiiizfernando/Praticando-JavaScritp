function encerra()
{
    return 0;
}

function contagem()
{
    let num1 = document.getElementById('valor1')
    let num2 = document.getElementById('valor2')
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    let resultado = document.getElementById('resultado')

    if(!Number.isInteger(numero1) || !Number.isInteger(numero2))
    {
        alert("Precisa digitar um valor inteiro para fazer a contagem.")
        encerra();
    }
    else
    {
        resultado.innerHTML += `<h2>Contando de ${numero1} até ${numero2}</h2>`
        if(numero1 > numero2)
        {
            for(let i = numero1; i >= numero2; i--)
            {
                resultado.innerHTML += ` ${i} &#x1F449`
            }
        }
        else if(numero2 > numero1)
        {
            for(let i = numero1; i <= numero2; i++)
            {
                resultado.innerHTML += ` ${i} &#x1F449`
            }
        }
        else
        {
            resultado.innerHTML += `Não é possível contar, pois os números são iguais` 
        }

        resultado.innerHTML += ` &#x1F3C1`
    }
}