function calcular()
{
    let numero = Number(prompt(`Digite um número:`))
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p> O número a ser analisado aqui será o <strong> ${numero} </strong> </p> <hr>`
    resultado.innerHTML += `<p> O seu valor absoluto é ${numero} </p>`
    resultado.innerHTML += `<p> A sua parte inteira é ${parseInt(numero)}</p>`
    resultado.innerHTML += `<p> O valor inteiro mais próximo é ${Math.round(numero)}</p> `
    resultado.innerHTML += `<p> A sua raiz quadrada é ${Math.sqrt(numero)}</p>`
    resultado.innerHTML += `<p> A sua raiz cúbica é ${Math.cbrt(numero)}</p>`
    resultado.innerHTML += `<p> O valor de ${numero}<sup>2</sup> é ${numero * numero}</p>`
    resultado.innerHTML += `<p> O valor de ${numero}<sup>3</sup> é ${numero * numero * numero}</p>`


}