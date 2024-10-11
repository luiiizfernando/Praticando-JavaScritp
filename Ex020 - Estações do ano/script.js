function estacao()
{
    let mes = prompt('Digite o mês em extenso (ex: Setembro)')
    let resultado = document.getElementById('resultado')
    switch (mes.toLowerCase())
    {
        case 'janeiro':
        case 'fevereiro':
        case 'março':
            resultado.innerHTML = `No mês de <mark> ${mes} </mark>, estamos na estação <mark> INVERNO. <mark>`
            break
        case 'abril':
        case 'maio':
        case 'junho':
            resultado.innerHTML = `No mês de <mark> ${mes} </mark>, estamos na estação <mark> PRIMAVERA. <mark>`
            break
        case 'julho':
        case 'agosto':
        case 'setembro':
            resultado.innerHTML = `No mês de <mark> ${mes} </mark>, estamos na estação <mark> VERÃO. <mark>`
            break
        case 'outubro':
        case 'novembro':
        case 'dezembro':
            resultado.innerHTML = `No mês de <mark> ${mes} </mark>, estamos na estação <mark> OUTONO. <mark>`
            break
        default:
            resultado.innerHTML = `No mês de <mark> ${mes} </mark>, estamos na estação <mark> INDEFINIDA. <mark>`
            break
    }
}