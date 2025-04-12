document.addEventListener("DOMContentLoaded", function () {
    let botaoJogar = document.querySelector(".botaoJogar");

    if (botaoJogar) {
        botaoJogar.addEventListener("click", function () {
            window.location.href = "../meuProjetoAPI/frontend/Html/login.html";
        });
    } else {
        console.error("Erro: O botão 'Jogar' não foi encontrado. Verifique a classe no HTML.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let botaoCadastro = document.querySelector(".botaoCadastro");

    if (botaoCadastro) {
        botaoCadastro.addEventListener("click", function () {
            window.location.href = "../meuProjetoAPI/frontend/Html/cadastro.html";
        });
    } else {
        console.error("Erro: O botão 'Jogar' não foi encontrado. Verifique a classe no HTML.");
    }
});
