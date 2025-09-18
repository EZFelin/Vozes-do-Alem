function cadastrar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    if(!email || !senha){
        alert("Preencha todos os campos!");
        return;
    }
    const registro = {
        email,
        senha
    };
    db.ref('RegistroLogin').push(registro)
        .then(() => {
            alert('Cadastro Concluído');
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
        });
    }

    function validarSenha() {
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagem");
        const temCaractereEspecial = /[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]/;

    if (!temCaractereEspecial.test(senha)){
        mensagem.textContent ="A senha tem que ter pelo menos um caractér especial";
        mensagem.style.color = "red";
    } 
    else {
        mensagem.textContent = "Senha Validada";
        mensagem.style.color = "green";
    }
}