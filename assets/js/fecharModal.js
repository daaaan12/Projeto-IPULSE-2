document.addEventListener('DOMContentLoaded', function () {
    // Selecione o modal e o botão "Fechar"
    const modal = document.getElementById('meuModal');
    const closeButton = modal.querySelector('.close');

    // Função para abrir o modal
    function abrirModal() {
        // Exiba o modal (defina display como "flex" ou adicione uma classe visível)
        modal.style.display = 'flex'; // ou modal.classList.add('visivel');

        // Impedir que a página role enquanto o modal estiver aberto
        document.body.style.overflow = 'hidden';

        // Adicione a classe op-modal-open ao corpo
        document.body.classList.add('op-modal-open');
    }

    // Função para fechar o modal
    function fecharModal() {
        // Oculte o modal (defina display como "none" ou remova a classe visível)
        modal.style.display = 'none'; // ou modal.classList.remove('visivel');

        // Restaure a rolagem da página
        document.body.style.overflow = 'auto';

        // Remova a classe op-modal-open do corpo
        document.body.classList.remove('op-modal-open');

        // Limpe o conteúdo do modal
        modal.querySelector('.portfolio-content').innerHTML = '';
        modal.querySelector('.portfolio-thumbnail').innerHTML = '';
    }

    // Adicione um evento de clique ao botão "Fechar"
    closeButton.addEventListener('click', function () {
        fecharModal();
    });

    // Adicione um evento de clique ao modal
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            fecharModal();
        }
    });

    // Evento de clique nos projetos dentro do carrossel (abre o modal)
    $('.project').on('click', function () {
        abrirModal();
    });
    
    // Adicione um ouvinte de evento de clique ao documento para fechar o modal ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
});
