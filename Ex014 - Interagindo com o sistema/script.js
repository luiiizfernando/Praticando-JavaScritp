function hora()
{
    let data = new Date()
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `O que eu recebi do sistema foi <mark> ${data} </mark>`;
}