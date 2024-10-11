function contar()
{
    let resultado = document.getElementById('resultado')
    resultado.innerHTML += `<h2> Números pares de 1 até 10 </h2>`
    
    for(let i = 1; i <= 10; i++)
    {
        if(i % 2 == 0)
        {
            resultado.innerHTML += ` ${i} &#x1F449`
        }
    }
    resultado.innerHTML += ` &#x1F3C1`
}