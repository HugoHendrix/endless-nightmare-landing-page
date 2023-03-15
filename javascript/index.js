// obtém o botão do trailer e a janela modal
var botaoTrailer = document.querySelector('.botao-trailer');
var modal = document.querySelector('.modal');

// quando o botão do trailer for clicado, exibe a janela modal
botaoTrailer.addEventListener('click', function() {
modal.style.display = 'block';
});

// quando o botão de fechar for clicado, esconde a janela modal
var fecharModal = document.querySelector('.fechar-modal');
fecharModal.addEventListener('click', function() {
modal.style.display = 'none';
});

// quando o usuário clicar fora da janela modal, esconde a janela modal
window.addEventListener('click', function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
});