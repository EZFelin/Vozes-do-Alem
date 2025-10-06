window.onload = () => {
    const nomeSalvo = localStorage.getItem('usuarioNome');
    if (nomeSalvo) {
        exibirUsuario(nomeSalvo);
    }
};

function exibirUsuario(nome) {
    // Remove ícone antigo, se existir
    const iconeExistente = document.querySelector('.usuario-icone');
    if (iconeExistente) {
        iconeExistente.remove();
    }

    // Cria o novo ícone
    const usuarioIcone = document.createElement('div');
    usuarioIcone.className = 'usuario-icone';
    usuarioIcone.innerHTML = `<span>👤 ${nome}</span>`;

    // Adiciona ao corpo da página
    document.body.appendChild(usuarioIcone);
}