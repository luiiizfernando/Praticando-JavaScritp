function idade()
{
    let anoAtual = new Date()
    let idade
    let resultado = document.getElementById('resultado')
    let anoNascimento = Number(prompt("Em que ano você nasceu?"))
    while(isNaN(anoNascimento) || anoNascimento.trim === 0 || anoNascimento > anoAtual.getFullYear())
    {
        alert("Você digitou ano de nascimento inválido.")
        anoNascimento = Number(prompt("Em que ano você nasceu?"))
    }
    idade = anoAtual.getFullYear() - anoNascimento
    resultado.innerHTML = `Quem nasceu em ${anoNascimento} vai completar <strong> ${idade} </strong> anos em ${anoAtual.getFullYear()}`
}