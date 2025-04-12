const conexao = require("../database/conexao");

const UsuarioModel = {
    criar: (nome, email, callback) => {
        const query = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
        conexao.query(query, [nome, email], (err, resultado) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, resultado.insertId);
        });
    },

    listar: (callback) => {
        const query = "SELECT * FROM usuarios";
        conexao.query(query, (err, resultados) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, resultados);
        });
    }
};

module.exports = UsuarioModel;
