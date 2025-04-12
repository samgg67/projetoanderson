const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "MySQLsenha5002@",
    database: process.env.DB_NAME || "jogonameit"
});

conexao.connect(err => {
    if (err) {
        console.error("❌ Erro ao conectar ao MySQL:", err);
        return;
    }
    console.log("✅ Conectado ao MySQL!");
});

module.exports = conexao;
