const pokemon = document.getElementById('pokemon');

    let velocidade = 3;   // Aumente para correr, diminua para andar devagar (Ex: 1 a 10)
    let alturaTopo = "80vh"; // Onde ele vai andar. "50vh" é o meio, "80vh" é perto do rodapé/chão

    // Aplica a altura escolhida no início
    pokemon.style.top = alturaTopo;

    let posicao = 0;
    let direcao = 1; // 1 = direita, -1 = esquerda

    function andar() {
      posicao += velocidade * direcao;
    pokemon.style.left = posicao + 'px';

    const larguraTela = window.innerWidth - pokemon.clientWidth;

      // Inverte ao bater nas bordas da tela
    if (posicao >= larguraTela && direcao === 1) {
        mudarDirecao(-1);
    } else if (posicao <= 0 && direcao === -1) {
        mudarDirecao(1);
    }

    requestAnimationFrame(andar);
    }

    // Função que executa a virada visual e lógica
    function mudarDirecao(novaDirecao) {
    direcao = novaDirecao;
    if (direcao === 1) {
        pokemon.style.transform = 'scaleX(1)';  // Olhando para a direita
    } else {
        pokemon.style.transform = 'scaleX(-1)'; // Olhando para a esquerda
    }
    }

    // Chamada pelo clique do mouse: inverte a direção atual na hora
    function virarManualmente() {
    if (direcao === 1) {
        mudarDirecao(-1);
    } else {
        mudarDirecao(1);
    }
    }

    // Inicia o loop de movimento
    andar();