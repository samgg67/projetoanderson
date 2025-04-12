document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastrar = document.querySelector('button');

    botaoCadastrar.addEventListener('click', async (event) => {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if (!nome || !email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha }) 
            });

            const data = await response.json();
            console.log("🔹 Resposta do backend:", data); 

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                window.location.href = "./Html/telainicial.html"; 
            } else {
                alert("Erro ao cadastrar usuário: " + data.erro);
            }
        } catch (error) {
            console.error("❌ Erro ao enviar dados:", error);
            alert("Erro ao conectar com o servidor!");
        }
    });
});
