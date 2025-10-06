function logar(){
    const emailf = document.getElementById('email').value.trim();
    const senhaf = document.getElementById('senha').value;

    db.ref('Registrobanco').orderByChild('email').equalTo(emailf).once('value')
    .then(snapshot => {
        if (snapshot.exists()) {
            const usuarios = snapshot.val();
            let usuarioEncontrado = false;
            for (let key in usuarios) {
                if (usuarios[key].senha === senhaf) {
                    usuarioEncontrado = true;
                    const nomeUsuario = usuarios[key].nome;
                    // Exibe o ícone e o nome do usuário
                    exibirUsuario(nomeUsuario);
                    localStorage.setItem('usuarioNome', nomeUsuario)
                    document.getElementById('email').value = '';
                    document.getElementById('senha').value = '';
                    break;
                }
            }
            if (!usuarioEncontrado) {
                alert("Email ou senha incorretos.");
            }
        } else {
            alert("Email não encontrado.");
        }
    });
}

function exibirUsuario(nome) {
    const iconeExistente = document.querySelector('.usuario-icone');
    if (iconeExistente) {
        iconeExistente.remove();
    }
    // Cria o ícone de usuário no canto inferior direito
    const usuarioIcone = document.createElement('div');
    usuarioIcone.className = 'usuario-icone';
    usuarioIcone.innerHTML = `<span>👤 ${nome}</span>`;

    // Adiciona o ícone ao corpo da página
    document.body.appendChild(usuarioIcone);
}

window.onload = () => {
    const nomeSalvo = localStorage.getItem('usuarioNome');
    if (nomeSalvo) {
        exibirUsuario(nomeSalvo);
    }
};

function logout() {
    // Remove o nome salvo no localStorage
    localStorage.removeItem('usuarioNome');

    // Remove o ícone da tela, se existir
    const iconeExistente = document.querySelector('.usuario-icone');
    if (iconeExistente) {
        iconeExistente.remove();
    }

    // (Opcional) Redirecionar para página de login
    window.location.href = 'login.html';
}
