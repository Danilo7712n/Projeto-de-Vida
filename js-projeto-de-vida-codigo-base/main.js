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
let tempoAtual = new Date ();
const TempoObjetivo1 = new Date ("2026-03-27T00:00:00") - tempoAtual;
contadores[0].textContent = TempoObjetivo1;
const TempoObjetivo2 = new Date ("2027-04-05T00:00:00") - tempoAtual;
contadores[1].textContent = TempoObjetivo2;
const TempoObjetivo3 = new Date ("2025-09-30T00:00:00") - tempoAtual;
contadores[2].textContent = TempoObjetivo3;
const TempoObjetivo4 = new Date ("2028-03-02T00:00:00") - tempoAtual;
contadores[3].textContent = TempoObjetivo4;