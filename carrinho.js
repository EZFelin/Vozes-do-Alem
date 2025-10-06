function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let lista = document.getElementById("lista-carrinho");
    let total = 0;
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<p style='color:white; text-align:center;'>Seu carrinho está vazio!</p>";
    } else {
        carrinho.forEach(item => {
            total += item.preco * item.quantidade;

            let div = document.createElement("div");
            div.classList.add("produto");
            div.innerHTML = `
             <div class="item-carrinho">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div>
                        <p><strong>${item.nome}</strong></p>
                        <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                        <p>Quantidade: ${item.quantidade}</p>
            `;
            lista.appendChild(div);
        });
    }

    document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra finalizada com sucesso!");
    localStorage.removeItem("carrinho");
    carregarCarrinho();
}

carregarCarrinho();

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