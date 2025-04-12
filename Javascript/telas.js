function verificarResposta(opcao) {
    let respostaCorreta = document.querySelector(".image-container").getAttribute("data-resposta");

    if (opcao === respostaCorreta) {
        alert('✅ Resposta correta!');

        
        let proximasTelas = {
            "iniciante1.html": "iniciante2.html",
            "iniciante2.html": "iniciante3.html",
            "iniciante3.html": "intermediario1.html",
            "intermediario1.html":"intermediario2.html",
            "intermediario2.html":"intermediario3.html",
            "intermediario3.html": "ranking.html"
        };

        let paginaAtual = window.location.pathname.split("/").pop();
        let proximaTela = proximasTelas[paginaAtual] || "telainicial.html"; 

        window.location.href = "telainicial.html";
    } else {
        alert('❌ Resposta incorreta! A resposta correta é ' + respostaCorreta);
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
document.addEventListener("DOMContentLoaded", function () {
    var helpImage = document.querySelector(".help-button");

    if (helpImage) {
        helpImage.addEventListener("click", function () {
            window.location.href = "ajuda.html";
        });
    }
});
