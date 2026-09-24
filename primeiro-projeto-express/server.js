const express = require("express");

const app = express();
const PORT = 3000;

// Permite receber JSON no body das requisições
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "API REST funcionando!"
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;

const cors = require("cors");

// Permite que a Vercel acesse a API do Render
app.use(cors({
    origin: "https://projeto-api-express-aab3.onrender.com"
}));