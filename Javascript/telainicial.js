document.addEventListener("DOMContentLoaded", function () {
    let botaoLock = document.querySelector(".lockIniciante");

    if (botaoLock) {
        botaoLock.addEventListener("click", function (event) {
            event.preventDefault(); 
            console.log("Redirecionando para iniciante1.html...");
            window.location.href = "iniciante1.html";
        });
    } else {
        console.error("Erro: O botão 'Entrar' não foi encontrado. Verifique a classe no HTML.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var helpImage = document.querySelector(".home-help");

    if (helpImage) {
        helpImage.addEventListener("click", function () {
            window.location.href = "ajuda.html";
        });
    }
});
