// Mostra só o resultado calculado. Se quiser manter o histório basta colocar += no innerhtml

function calcular ()
{
    let resultado = document.getElementById('resultado')
    resultado.innerHTML += ` `
    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    if(num1.value === '' || num2.value === '')
    {
        alert("Para fazer a soma precisa digitar os dois números. Por favor digite os dois números.")
        num1.value = ''
        num2.value = ''
        resultado.innerHTML = ``
    }
    else
    {
        num1.value = ''
        num2.value = ''
        resultado.innerHTML = `<p> ${numero1} + ${numero2} = ${numero1 + numero2} <p>`
    }
    
}