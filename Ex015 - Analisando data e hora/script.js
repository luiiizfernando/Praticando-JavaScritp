function hora()
{
    let data = new Date()
    let resultado = document.getElementById('resultado')
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    resultado.innerHTML = `<p> Dia: <mark> ${data.getDate()} </mark> </p>`;
    let mesAtual = meses[data.getMonth()];
    resultado.innerHTML += `<p> Mês: <mark> ${mesAtual} </mark> </p>`;
    resultado.innerHTML += `<p> Ano: <mark> ${data.getFullYear()} </mark> </p>`;
    let diaDaSemana = diasDaSemana[data.getDay()];
    resultado.innerHTML += `<p> Dia da semana: <mark> ${diaDaSemana} </mark> </p>`;
    resultado.innerHTML += `<p> Hora: <mark> ${data.getHours()} </mark> </p>`;
    resultado.innerHTML += `<p> Minutos: <mark> ${data.getMinutes()} </mark> </p>`;
    resultado.innerHTML += `<p> Segundos: <mark> ${data.getSeconds()} </mark> </p>`;
}