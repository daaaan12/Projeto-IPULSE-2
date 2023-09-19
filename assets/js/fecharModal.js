// Selecione o modal e o botão "close"
const modal = document.getElementById('meuModal');
const closeButton = modal.querySelector('.close');

// Função para abrir o modal
function abrirModal() {
  // Exiba o modal (defina display como "flex" ou adicione uma classe visível)
  modal.style.display = 'flex'; // ou modal.classList.add('visivel');

  // Impedir que a página role enquanto o modal estiver aberto
  document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function fecharModal() {
  // Oculte o modal (defina display como "none" ou remova a classe visível)
  modal.style.display = 'none'; // ou modal.classList.remove('visivel');

  // Restaure a rolagem da página
  document.body.style.overflow = 'auto';
}

// Adicione um evento de clique ao botão "close"
closeButton.addEventListener('click', fecharModal);

// Evento de clique nos projetos dentro do carrossel
$('.project').on('click', function () {
  // Feche o modal atual (se estiver aberto)
  fecharModal();

  // Obtenha as informações relevantes para o projeto clicado
  const projetoClicado = obterInformacoesDoProjeto(this); // Substitua com a lógica para obter informações do projeto

  // Atualize o conteúdo do modal com as informações do projeto
  atualizarConteudoDoModal(projetoClicado); // Substitua com a lógica para atualizar o conteúdo do modal

  // Chame a função abrirModal() para abrir o novo modal
  abrirModal();
});
