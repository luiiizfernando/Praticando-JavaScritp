let resultado = document.getElementById('resultado')

function gerarNumeros()
{
    let numeroAleatório = Math.floor(Math.random() * 100) + 1
    resultado.innerHTML += `<p> Acabei de pensar no número <mark> ${numeroAleatório} </mark>! </p>`
}

function limpar()
{
    resultado.innerHTML = ''
}