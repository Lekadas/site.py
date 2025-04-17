document.addEventListener("DOMContentLoaded", function () {
    let clickCounts = {
        whatsapp: 0,
        email: 0,
        linkedin: 0,
        pdf: 0
    };

    document.querySelector(".whatsapp-button").addEventListener("click", function () {
        clickCounts.whatsapp++;
        console.log(`WhatsApp clicado ${clickCounts.whatsapp} vezes`);
    });

    document.querySelector(".email-button").addEventListener("click", function () {
        clickCounts.email++;
        console.log(`E-mail clicado ${clickCounts.email} vezes`);
    });

    document.querySelector(".linkedin-button").addEventListener("click", function () {
        clickCounts.linkedin++;
        console.log(`LinkedIn clicado ${clickCounts.linkedin} vezes`);
    });

    document.querySelector(".pdf-button").addEventListener("click", function () {
        clickCounts.pdf++;
        console.log(`Currículo baixado ${clickCounts.pdf} vezes`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.createElement("p");
    dateElement.style.textAlign = "center";
    dateElement.style.marginTop = "0"; // Remove o espaçamento superior
    dateElement.style.position = "absolute"; // Permite posicionamento absoluto
    dateElement.style.top = "74%"; // Centraliza verticalmente
    dateElement.style.left = "51%"; // Centraliza horizontalmente
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