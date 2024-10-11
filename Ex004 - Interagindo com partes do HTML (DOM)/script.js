function mensagem()
{
    let nome = prompt("Qual é o seu nome?")
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `Olá, <strong>${nome}!</strong> É um grande prazer te conhecer! \u{1F596}`
    //resultado.innerHTML = `Olá, <strong>${nome}!</strong> É um grande prazer te conhecer!` + String.fromCodePoint(0x1F596)
}