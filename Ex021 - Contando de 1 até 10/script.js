function contar()
{
    let resultado = document.getElementById('resultado')
    resultado.innerHTML += `<h2> Contando de 1 até 10</h2>`
    
    for(let i = 1; i <= 10; i++)
    {
        resultado.innerHTML += ` ${i} &#x1F449`
    }
    resultado.innerHTML += ` &#x1F3C1`
}