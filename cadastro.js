
function cadastro(){
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    const registrobanco = {
        nome,
        email,
        senha,
        confirmar
    }
    db.ref('Registrobanco').push(registrobanco)
        .then(() => {
            alert('Cadastro Concluído');
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
            document.getElementById('confirmar').value = '';
        });
    }