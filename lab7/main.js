// Linha 1 - Interação com o primeiro item da lista
let firstLine = document.querySelector("ol li:nth-child(1)");
function changeText() { 
    firstLine.textContent = "Obrigado por passares!";
}
function reverseText() {
    firstLine.textContent = "Passa o rato por aqui!";
}
firstLine.addEventListener("mouseover", changeText);
firstLine.addEventListener("mouseout", reverseText);

// Linha 2 - Botões para mudar a cor do texto
let secondLine = document.querySelector("ol li:nth-child(2)");
const colorButtons = secondLine.querySelectorAll("button");

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");
        secondLine.style.color = color;
    });
});

// Linha 3 - Mudança de cor do fundo do input
let thirdLineInput = document.querySelector("ol li:nth-child(3) input");
thirdLineInput.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor(e) {
    const length = e.target.value.length;
    const colors = ["white", "green", "yellow", "blue", "red"];
    thirdLineInput.style.backgroundColor = colors[length % 4] || "white";
}

// Linha 4 - Mudança de cor do fundo da página
let fourthLineButton = document.querySelector("ol li:nth-child(4) button");
let fourthLineInput = document.querySelector("ol li:nth-child(4) input");

fourthLineButton.addEventListener("click", () => {
    document.body.style.backgroundColor = fourthLineInput.value;
});

// Linha 5 - Contador
let fifthLineButton = document.querySelector("#counterButton");
let counterDisplay = document.querySelector("#counterDisplay");
let counterValue = 0;

fifthLineButton.addEventListener("click", () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});
