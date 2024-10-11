// Tem verificação se o usuário realmente digita um número a mais do que o exercício proposto
function calcular()
{
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = prompt(`Qual foi a primeira nota de ${nome}?`)
    let media;
    while (isNaN(n1) || n1.trim() === "")
    {   
        alert("Você não digitou um número válido. Por favor digite novamete.")
        n1 = prompt(`Qual foi a primeira nota de ${nome}?`)
    }
    let n2 = prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`)
    while (isNaN(n2) || n2.trim() === "")
    {   
        alert("Você não digitou um número válido. Por favor digite novamete.")
        n2 = prompt(`Qual foi a primeira nota de ${nome}?`)
    }
    media = ((Number(n1) + Number(n2)) / 2)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p> Calculando a média final de <mark>${nome}</mark>. </p>`
    resultado.innerHTML += `<p> As notas obtidas foram <mark> ${n1} e ${n2} </mark>. </p>`
    resultado.innerHTML += `<p> A média final será <mark> ${media} </mark>.</p>`
    if (media < 6)
    {
        resultado.innerHTML += `A mensagem que temos é: <strong style="color:red"> Estude um pouco mais! </strong> `
    }
    else
    {
        resultado.innerHTML += `A mensagem que temos é: <strong style="color:red"> Meus parabéns! </strong> `
    }


}