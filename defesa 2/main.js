const listaProdutos = document.getElementById("lista-produtos");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total");
const filtroCategorias = document.getElementById("categorias");
const ordenarPor = document.getElementById("ordenacao");
const campoBusca = document.getElementById("busca");
let produtosDisponiveis = [];
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://deisishop.pythonanywhere.com/products/")
        .then((res) => res.json())
        .then((dados) => {
            produtosDisponiveis = dados;
            exibirProdutos(dados);
        });

    fetch("https://deisishop.pythonanywhere.com/categories/")
        .then((res) => res.json())
        .then((categorias) => {
            categorias.forEach((cat) => {
                const opcao = document.createElement("option");
                opcao.value = cat;
                opcao.textContent = cat;
                filtroCategorias.appendChild(opcao);
            });
        });

    atualizarCarrinho();

    filtroCategorias.addEventListener("change", filtrar);
    ordenarPor.addEventListener("change", ordenar);
    campoBusca.addEventListener("input", buscar);
});

function exibirProdutos(produtos) {
    listaProdutos.innerHTML = "";
    produtos.forEach((prod) => {
        const item = document.createElement("li");
        const bloco = document.createElement("div");
        bloco.innerHTML = `
            <h3>${prod.title}</h3>
            <img src="${prod.image}" alt="${prod.title}">
            <p>${prod.price.toFixed(2)} €</p>
            <p>${prod.description}</p>
        `;
        const botao = document.createElement("button");
        botao.textContent = "Adicionar";
        botao.addEventListener("click", () => {
            adicionarAoCarrinho(prod);
        });
        bloco.appendChild(botao);
        item.appendChild(bloco);
        listaProdutos.appendChild(item);
    });
}

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

function removerTodos(){
    produtos = [];
    const cesto = document.querySelector('lista-produtos')

    allProducts.forEach(produtos => {
        removerDoCarrinho(produtos);
    });
}

function atualizarCarrinho() {
    itensCarrinho.innerHTML = "";
    total = 0;
    carrinho.forEach((item, idx) => {
        const linha = document.createElement("li");
        linha.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.price.toFixed(2)} €</p>
        `;
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => {
            removerDoCarrinho(idx);
        });
        linha.appendChild(botaoRemover);
        itensCarrinho.appendChild(linha);
        total += item.price;
    });
    totalCarrinho.textContent = `Total: ${total.toFixed(2)} €`;
}

function removerDoCarrinho(indice) {
    carrinho.splice(indice, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

function filtrar() {
    const categoria = filtroCategorias.value;
    const produtosFiltrados = categoria === "todas"
        ? produtosDisponiveis
        : produtosDisponiveis.filter((p) => p.category === categoria);
    exibirProdutos(produtosFiltrados);
}

function ordenar() {
    const ordem = ordenarPor.value;
    const produtosOrdenados = [...produtosDisponiveis];
    if (ordem === "asc") {
        produtosOrdenados.sort((a, b) => a.price - b.price);
    } else if (ordem === "desc") {
        produtosOrdenados.sort((a, b) => b.price - a.price);
    }else if(ordem === "avalAsc"){
        produtosOrdenados.sort((a, b) => a.rating - a.rating);
    }else if(ordem === "avalDec"){
        produtosOrdenados.sort((a, b) => b.rating - a.rating);
    }
    exibirProdutos(produtosOrdenados);
}

function buscar() {
    const termo = campoBusca.value.toLowerCase();
    const produtosEncontrados = produtosDisponiveis.filter((p) =>
        p.title.toLowerCase().includes(termo) || p.description.toLowerCase().includes(termo)
    );
    exibirProdutos(produtosEncontrados);
}