// Seleciona todos os botões "Adicionar ao carrinho"
document.querySelectorAll(".btn-adicionar").forEach(botao => {
    botao.addEventListener("click", () => {
        // Pega as infos do produto pelo dataset
        const produto = botao.closest(".produto");
        const id = produto.dataset.id;
        const nome = produto.dataset.nome;
        const preco = parseFloat(produto.dataset.preco);
        const imagem = produto.querySelector("img").getAttribute("src");


        // Recupera carrinho d
        // o localStorage
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        // Verifica se já existe no carrinho
        let itemExistente = carrinho.find(item => item.id === id);
        if (itemExistente) {
            itemExistente.quantidade += 1; // se já tem, soma quantidade
        } else {
            carrinho.push({ id, nome, preco,imagem, quantidade: 1 });
        }

        // Salva no localStorage
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert(`${nome} adicionado ao carrinho!`);
    });
});
