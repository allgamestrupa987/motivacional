// Controle do movimento
let letreiro = document.getElementById("letreiro");
let container = document.getElementById("container");

// posição inicial (começa na esquerda)
let pos = 0;

// direção: 1 = direita, -1 = esquerda
let direcao = 1;

// velocidade do movimento (pixels por atualização)
let velocidade = 2;

function animar() {
    const larguraLetreiro = letreiro.offsetWidth;
    const larguraContainer = container.clientWidth;

    pos += velocidade * direcao;

    // Troca de direção ao chegar nas extremidades
    if (pos + larguraLetreiro >= larguraContainer) {
        direcao = -1; // volta
    } else if (pos <= 0) {
        direcao = 1;  // vai para a direita novamente
    }

    // Aplica a posição
    letreiro.style.left = pos + "px";

    requestAnimationFrame(animar);
}

animar();
