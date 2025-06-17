const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove ("ativo");
            textos[j].classList.remove ("ativo");
        }

        botoes[i].classList.add ("ativo");
        textos[i].classList.add ("ativo");
    }
}

const contadores = document.querySelectorAll (".contador");

const TempoObjetivo1 = new Date ("2026-03-27T00:00:00");
contadores[0].textContent = calculaTempo (TempoObjetivo1);
const TempoObjetivo2 = new Date ("2027-04-05T00:00:00");
contadores[1].textContent = calculaTempo (TempoObjetivo2);
const TempoObjetivo3 = new Date ("2025-09-30T00:00:00");
contadores[2].textContent = calculaTempo (TempoObjetivo3);
const TempoObjetivo4 = new Date ("2028-03-02T00:00:00");
contadores[3].textContent = calculaTempo (TempoObjetivo4);

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  return dias;
}