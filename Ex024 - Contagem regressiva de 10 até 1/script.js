function contar()
{
    let resultado = document.getElementById('resultado')
    resultado.innerHTML += `<h2> Contagem Regressiva de 10 a 1 </h2>`
    
    for(let i = 10; i >= 1; i--)
    {
        resultado.innerHTML += ` ${i} &#x1F449`
    }
    resultado.innerHTML += ` &#x1F3C1`
}