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

// Linha 4 - cor de fundo

function mudarCor(selectElement) {
    document.body.style.backgroundColor = selectElement.value;
}


// Linha 5 - Contador
let fifthLineButton = document.querySelector("#counterButton");
let counterDisplay = document.querySelector("#counterDisplay");
// Inicializa o contador com o valor armazenado no localStorage (ou 0 se não existir)
let counterValue = parseInt(localStorage.getItem("counterValue")) || 0;
 // Atualiza o display com o valor inicial
 counterDisplay.textContent = counterValue;

fifthLineButton.addEventListener("click", () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
    localStorage.setItem("counterValue", counterValue);
});

//Linha 6 - Nome
document.querySelector('#submitButton').addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.querySelector('#nameInput').value;
    const age = document.querySelector('#ageInput').value;
    console.log(`Olá o ${name} têm ${age}!`);
    alert(`Olá o ${name} têm ${age}!`)
});

// Linha 7 - Contador automatico
let counterDisplay1 = document.getElementById("counter");
let countadorValue = 0;

function count() {
    countadorValue++;
    counterDisplay1.textContent = countadorValue;
}
setInterval(count, 1000);
