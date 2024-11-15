document.addEventListener("DOMContentLoaded", function() {
    // SEÇÃO: Eventos de Rato
    const title = document.getElementById("title");

    // Evento de clique: altera o conteúdo de texto do título
    title.addEventListener("click", () => {
        title.textContent = "Only bangers on this page";
    });

    // Evento de duplo clique: altera a cor do fundo do título
    title.addEventListener("dblclick", () => {
        title.style.backgroundColor = "lightblue";
    });

    // Evento mouseover: muda o conteúdo do parágrafo de introdução
    const introParagraph = title.nextElementSibling;
    introParagraph.addEventListener("mouseover", () => {
        introParagraph.textContent = "follow on ig! @xanny7k";
    });

    // Evento mouseout: restaura o texto do parágrafo de introdução
    introParagraph.addEventListener("mouseout", () => {
        introParagraph.textContent = "Bem-vindo ao meu portfólio! Aqui você encontra alguns dos meus beats de hip-hop. Aproveite e ouça!";
    });

    // Evento mousemove: exibe as coordenadas do cursor na tela
    document.addEventListener("mousemove", (event) => {
        const coordDisplay = document.getElementById("coordDisplay");
        if (!coordDisplay) {
            const newCoordDisplay = document.createElement("p");
            newCoordDisplay.id = "coordDisplay";
            newCoordDisplay.style.position = "fixed";
            newCoordDisplay.style.bottom = "10px";
            newCoordDisplay.style.right = "10px";
            newCoordDisplay.style.backgroundColor = "#f1f1f1";
            newCoordDisplay.style.padding = "5px";
            newCoordDisplay.style.border = "1px solid #ccc";
            document.body.appendChild(newCoordDisplay);
        }
        document.getElementById("coordDisplay").textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    });

    document.addEventListener("keyup", (event) => {
        const keyDisplay = document.getElementById("keyDisplay");
        if (!keyDisplay) {
            const newKeyDisplay = document.createElement("p");
            newKeyDisplay.id = "keyDisplay";
            newKeyDisplay.style.position = "fixed";
            newKeyDisplay.style.bottom = "50px";
            newKeyDisplay.style.right = "10px";
            newKeyDisplay.style.backgroundColor = "#f1f1f1";
            newKeyDisplay.style.padding = "5px";
            newKeyDisplay.style.border = "1px solid #ccc";
            document.body.appendChild(newKeyDisplay);
        }
        document.getElementById("keyDisplay").textContent = `Última tecla solta: ${event.key}`;
    });

    // SEÇÃO: Eventos de Formulário
    const sampleInput = document.getElementById("sampleInput");
    sampleInput.addEventListener("change", () => {
        const changeMessage = document.getElementById("changeMessage");
        if (!changeMessage) {
            const newChangeMessage = document.createElement("p");
            newChangeMessage.id = "changeMessage";
            newChangeMessage.style.color = "green";
            newChangeMessage.innerHTML = "<strong>Feedback Enviado!</strong>";
            sampleInput.insertAdjacentElement("afterend", newChangeMessage);
        }
    });

    const sampleForm = document.getElementById("sampleForm");
    sampleForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão para evitar recarregar a página
        alert("Formulário enviado com sucesso!");
        sampleForm.reset(); // Limpa o formulário
    });
});
