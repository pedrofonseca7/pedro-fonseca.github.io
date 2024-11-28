// Seleção de elementos do DOM
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalCostElement = document.getElementById('total-cost');

let cart = [];
let totalCost = 0;

// Inicializar a lista de produtos no localStorage, caso não exista
if (!localStorage.getItem('produtos-selecionados')) {
    localStorage.setItem('produtos-selecionados', JSON.stringify([]));
}

// Carregar produtos e cesto ao carregar a página
window.addEventListener("load", () => {
    renderizarProdutos(produtos);
    atualizarCesto();
});

// Função para renderizar a lista de produtos
function renderizarProdutos(produtos) {
    for (const produto of produtos) {
        const productElement = document.createElement('li');
        const productContent = criarElementoProduto(produto);
        productElement.appendChild(productContent);
        productList.appendChild(productElement);
    }
}

// Função para criar um elemento HTML de produto
function criarElementoProduto(produto) {
    const article = document.createElement('article');
    const buttonAdd = document.createElement('button');

    buttonAdd.textContent = "Adicionar ao Cesto";
    buttonAdd.addEventListener('click', () => {
        adicionarProduto(produto);
        atualizarCesto();
    });

    article.innerHTML = `
        <h3>${produto.title}</h3>
        <img src="${produto.image}" alt="${produto.title}" width="150">
        <p>Preço: €${produto.price.toFixed(2)}</p>
        <p>${produto.description}</p>
    `;
    article.appendChild(buttonAdd);

    return article;
}

// Função para adicionar um produto ao localStorage
function adicionarProduto(produto) {
    const storedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    storedProducts.push(produto);
    localStorage.setItem('produtos-selecionados', JSON.stringify(storedProducts));
}

// Função para atualizar o conteúdo do cesto
function atualizarCesto() {
    const storedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    cartItems.innerHTML = '';
    totalCost = 0;

    storedProducts.forEach(produto => {
        const cartItemElement = criarElementoCesto(produto);
        cartItems.appendChild(cartItemElement);
        totalCost += produto.price;
    });

    totalCostElement.textContent = `Custo Total: €${totalCost.toFixed(2)}`;
}

// Função para criar elementos de produtos no cesto
function criarElementoCesto(produto) {
    const cartItem = document.createElement('article');
    const buttonRemove = document.createElement('button');

    buttonRemove.textContent = "Remover";
    buttonRemove.addEventListener('click', () => {
        removerProduto(produto.id);
        atualizarCesto();
    });

    cartItem.innerHTML = `
        <h3>${produto.title}</h3>
        <img src="${produto.image}" alt="${produto.title}" width="100">
        <p>Preço: €${produto.price.toFixed(2)}</p>
    `;
    cartItem.appendChild(buttonRemove);

    return cartItem;
}

// Função para remover um produto específico do localStorage
function removerProduto(id) {
    let storedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    storedProducts = storedProducts.filter(produto => produto.id !== id);
    localStorage.setItem('produtos-selecionados', JSON.stringify(storedProducts));
}
