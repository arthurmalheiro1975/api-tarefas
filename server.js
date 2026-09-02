const express = require("express");

const app = express();

app.use(express.json());

const healthRoutes = require("./src/Routes/health");

app.use(healthRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});