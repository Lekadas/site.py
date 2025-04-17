document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.createElement("p");
    dateElement.style.textAlign = "center";
    dateElement.style.marginTop = "0"; // Remove o espaçamento superior
    dateElement.style.position = "absolute"; // Permite posicionamento absoluto
    dateElement.style.top = "65%"; // Centraliza verticalmente
    dateElement.style.left = "57%"; // Centraliza horizontalmente
    dateElement.style.transform = "translate(-50%, -50%)"; // Ajusta para o centro exato
    dateElement.style.fontSize = "12px"; // Ajusta o tamanho da fonte
    dateElement.style.fontWeight = "bold"; // Deixa o texto em negrito

    function updateDateTime() {
        const now = new Date();
        dateElement.textContent = `Data e Hora Atual: ${now.toLocaleString()}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000); // Atualiza a cada segundo

    document.body.appendChild(dateElement);
});

