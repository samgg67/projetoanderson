function buscarUsuarios() {
    fetch("http://localhost:3000/api/usuarios")
      .then(response => response.json())
      .then(data => {
          console.log("🔹 Dados recebidos da API:", data); // 🔍 Depuração no console
          const listaUsuarios = document.getElementById("listaUsuarios");
          listaUsuarios.innerHTML = ""; 

          if (!data || data.length === 0) {
              listaUsuarios.innerHTML = "<li>Nenhum usuário encontrado.</li>"; // 🔹 Exibir mensagem no HTML
              return;
          }

          data.forEach(usuario => {
              const item = document.createElement("li");
              item.textContent = `${usuario.nome} - ${usuario.email}`;
              listaUsuarios.appendChild(item);
          });
      })
      .catch(error => console.error("❌ Erro ao buscar usuários:", error));
} /*const response = await fetch("http://localhost:3000/api/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }) 
}); */
