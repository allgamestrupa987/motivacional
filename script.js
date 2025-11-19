let letreiro = document.getElementById("letreiro");
let container = document.getElementById("container");

let pos = 0;          // posição inicial
let direcao = 1;      // 1 = direita, -1 = esquerda
let velocidade = 3;   // velocidade LED turbo

function animar() {
    const larguraLetreiro = letreiro.offsetWidth;
    const larguraContainer = container.clientWidth;

    pos += velocidade * direcao;

    if (pos + larguraLetreiro >= larguraContainer) {
        direcao = -1;
    } else if (pos <= 0) {
        direcao = 1;
    }

    letreiro.style.left = pos + "px";

    requestAnimationFrame(animar);
}

animar();
