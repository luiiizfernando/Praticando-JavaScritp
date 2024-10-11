function calcular()
{
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = prompt(`Qual foi a primeira nota de ${nome}?`)
    let n2 = prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p> Calculando a média final de <mark>${nome}</mark>. </p>`
    resultado.innerHTML += `<p> As notas obtidas foram <mark> ${n1} e ${n2} </mark>. </p>`
    resultado.innerHTML += `<p> A média final será <mark> ${((Number(n1) + Number(n2)) / 2)} </mark>.</p>`

}