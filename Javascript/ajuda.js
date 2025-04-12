function enviarMensagem() {
    const textoDúvida = document.getElementById("doubt").value.trim(); 
    if (textoDúvida) {
        alert("Resposta enviada com sucesso! Responderemos assim que possível.");
    } else {
        alert("Por favor, escreva sua dúvida antes de enviar.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var homeImage = document.querySelector(".home-button");

    if (homeImage) {
        homeImage.addEventListener("click", function () {
            window.location.href = "telainicial.html";
        });
    }
});
