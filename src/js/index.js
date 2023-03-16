const botoesCarrossoel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossoel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativaBotaoSelecionado();
        esconderImagemAtiva();
        selecionarBotaoCarrossel(botao); 
        mostrarImagemDeFundo(indice);
  })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}

