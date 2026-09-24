const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite que o Front-End na Vercel acesse esta API
app.use(cors({
    origin: "https://projeto-api-express.vercel.app"
}));

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