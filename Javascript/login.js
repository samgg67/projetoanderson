document.addEventListener("DOMContentLoaded", function () {
    const botaoSubmit = document.querySelector(".submit");

    botaoSubmit.addEventListener("click", async (event) => {
        event.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("password").value.trim();

        if (!email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();
            console.log("🔹 Resposta do backend:", data); 

            if (data.sucesso) {
                alert("Login realizado com sucesso!");
                window.location.href = "./Html/telainicial.html"; 
            } else {
                alert("Usuário ou senha inválidos!");
            }
        } catch (error) {
            console.error("❌ Erro ao tentar login:", error);
            alert("Erro ao conectar com o servidor!");
        }
    });
});
