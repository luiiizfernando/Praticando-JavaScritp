let resultado = document.getElementById('resultado')
let numeroAleatório = Math.floor(Math.random() * 100) + 1

function advinhar()
{
    let numeroChutado = Number(prompt("Qual é o seu palpite?"))
    while(!Number.isInteger(Number(numeroChutado)) || numeroChutado < 1 || numeroChutado > 100)
    {
        alert("Você não digitou um número ou digitou um valor inválido.")
        numeroChutado = Number(prompt("Qual é o seu palpite?"))
    }
    if(numeroChutado > numeroAleatório)
    {
        resultado.innerHTML += `<p> Você falou ${numeroChutado}. Meu número é <strong> MENOR! </strong> </p>`
    }
    else if(numeroChutado < numeroAleatório)
    {
        resultado.innerHTML += `<p> Você falou ${numeroChutado}. Meu número é <strong> MAIOR! </strong> </p>`
    }
    else 
    {
        resultado.innerHTML += `<p> <strong> PARABÉNS! </strong> Você acertou! Eu tinha sorteado o valor ${numeroAleatório}! </p>`
        // esconde o botão do chute
        document.getElementById('botao').style.visibility = "hidden"
    }   
}