const express = require("express");
const conexao = require("../database/conexao");

const router = express.Router();

router.post("/usuarios", (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: "Nome, email e senha são obrigatórios!" });
    }

    const query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    conexao.query(query, [nome, email, senha], (err, resultado) => {
        if (err) {
            res.status(500).json({ erro: "Erro ao cadastrar usuário" });
            return;
        }
        res.json({ mensagem: "Usuário cadastrado com sucesso!", id: resultado.insertId });
    });
});

// 🔹 Login do usuário
router.post("/login", (req, res) => {
    const { email, senha } = req.body;

    const query = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
    conexao.query(query, [email, senha], (err, resultado) => {
        if (err) {
            console.error("❌ Erro no login:", err.sqlMessage); 
            res.status(500).json({ erro: "Erro ao realizar login" });
            return;
        }

        if (resultado.length > 0) {
            res.json({ sucesso: true, mensagem: "Login realizado com sucesso!" });
        } else {
            res.status(401).json({ sucesso: false, mensagem: "Usuário ou senha inválidos!" });
        }
    });
});

module.exports = router;
