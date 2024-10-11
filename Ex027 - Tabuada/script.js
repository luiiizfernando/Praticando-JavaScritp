function tabuada()
{
    let resultado = document.getElementById('resultado')
    let num = document.getElementById('num')
    let numero = num.value
    if(numero.length === 0)
    {
        numero = 0
    }

    resultado.innerHTML = `<h2>Tabuada de ${numero}</h2>`

    for(let i = 1; i <= 10; i++)
    {
        resultado.innerHTML += `${numero} x ${i} = <strong> ${numero * i} </strong> <br>`
    }
}