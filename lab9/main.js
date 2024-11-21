// Obtém os elementos onde os produtos serão renderizados
const listaProdutos = document.getElementById('lista-produtos');
const produtosEscolhidos = document.getElementById('produtos-escolhidos');

// Função para renderizar produtos dinamicamente
function renderizarProdutos() {
    produtos.forEach(produto => {
        const artigo = document.createElement('article');
        artigo.className = 'produto';

        artigo.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}" class="imagem-produto">
            <h3>${produto.title}</h3>
            <p>${produto.description}</p>
            <p><strong>Preço:</strong> ${produto.price.toFixed(2)}€</p>
            <button class="btn-adicionar" data-id="${produto.id}">Adicionar ao Cesto</button>
        `;

        listaProdutos.appendChild(artigo);
    });

    configurarBotoes();
}

// Configura os botões "Adicionar ao Cesto"
function configurarBotoes() {
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', event => {
            const idProduto = event.target.getAttribute('data-id');
            const produto = produtos.find(p => p.id === parseInt(idProduto));
            adicionarAoCesto(produto);
        });
    });
}

// Adiciona um produto ao cesto
function adicionarAoCesto(produto) {
    const artigo = document.createElement('article');
    artigo.className = 'produto-cesto';

    artigo.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}" class="imagem-produto">
        <h3>${produto.title}</h3>
        <p><strong>Preço:</strong>${produto.price.toFixed(2)}€</p>
    `;

    produtosEscolhidos.appendChild(artigo);
}

// Inicializa a página carregando os produtos
renderizarProdutos();
