const express = require("express");

const app = express();

app.use(express.json());

const healthRoutes = require("./src/Routes/health");
const tarefaRoutes = require("./src/Routes/routes");

const sequelize = require("./src/config/database");

app.use(healthRoutes);
app.use(tarefaRoutes);

const PORT = 3000;

sequelize.sync()
    .then(() => {
        console.log("Banco sincronizado!");

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Erro ao sincronizar banco:", error);
    });