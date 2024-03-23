var jogador, vencedor = null

var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')

var jogadorX = document.getElementById('jogadorX')
var jogadorO = document.getElementById('jogadorO')

var quadrado = document.getElementsByClassName('qudrado')

jogadorX.innerHTML = 0
jogadorO.innerHTML = 0
mudarJogador("X");

function escolherQuadrado(id) {
    
    if (vencedor !== null) {
        return;
    }
    var quadrado = document.getElementById(id)
    if (quadrado.innerHTML !== '-') {

        return;
    }
        quadrado.innerHTML = jogador;
        quadrado.style.color = '#000';

        if (jogador === "X") {
        
            jogador = "O"
        }
        else {
            jogador = "X"
        }
    
    mudarJogador(jogador)
    checaVencedor();
    
}

function mudarJogador(valor) {
    
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor(){


    var quadrados = [document.getElementById("1"),document.getElementById("2"),document.getElementById("3"),document.getElementById("4"),document.getElementById("5"),document.getElementById("6"),document.getElementById("7"),document.getElementById("8"),document.getElementById("9")];

    if (checaSequencia(quadrados[1-1], quadrados[2-1], quadrados[3-1])){
        mudaCorQuadrado(quadrados[1-1], quadrados[2-1], quadrados[3-1]);
        mudarVencedor(quadrados[1-1])
    }
    else if (checaSequencia(quadrados[4-1], quadrados[5-1], quadrados[6-1])){
        mudaCorQuadrado(quadrados[4-1], quadrados[5-1], quadrados[6-1]);
        mudarVencedor(quadrados[4-1])
    }
    else if (checaSequencia(quadrados[7-1], quadrados[8-1], quadrados[9-1])){
        mudaCorQuadrado(quadrados[7-1], quadrados[8-1], quadrados[9-1]);
        mudarVencedor(quadrados[7-1])
    }
    else if (checaSequencia(quadrados[1-1], quadrados[4-1], quadrados[7-1])){
        mudaCorQuadrado(quadrados[1-1], quadrados[4-1], quadrados[7-1]);
        mudarVencedor(quadrados[1-1])
    }
    else if (checaSequencia(quadrados[2-1], quadrados[5-1], quadrados[8-1])){
        mudaCorQuadrado(quadrados[2-1], quadrados[5-1], quadrados[8-1]);
        mudarVencedor(quadrados[2-1])
    }
    else if (checaSequencia(quadrados[3-1], quadrados[6-1], quadrados[9-1])){
        mudaCorQuadrado(quadrados[3-1], quadrados[6-1], quadrados[9-1]);
        mudarVencedor(quadrados[3-1])
    }
    else if (checaSequencia(quadrados[3-1], quadrados[5-1], quadrados[7-1])){
        mudaCorQuadrado(quadrados[3-1], quadrados[5-1], quadrados[7-1]);
        mudarVencedor(quadrados[3-1])
    }
    else if (checaSequencia(quadrados[1-1], quadrados[5-1], quadrados[9-1])){
        mudaCorQuadrado(quadrados[1-1], quadrados[5-1], quadrados[9-1]);
        mudarVencedor(quadrados[1-1])
    }
    
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor
    if (vencedor == 'X') {
        jogadorX.innerHTML = parseInt(jogadorX.innerHTML) + 1;
    }
    else {
        jogadorO.innerHTML = parseInt(jogadorO.innerHTML) + 1;
    }

}

function mudaCorQuadrado(q1, q2, q3) {
    
    q1.style.background = '#0f0';
    q2.style.background = '#0f0';
    q3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    
    var eigual = false;

    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        
        eigual = true;
    }

    return eigual
}

function reiniciar() {

    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for (var i = 1; i <= 9; i++){

        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X')
}