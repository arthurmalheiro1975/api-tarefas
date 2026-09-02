const express = require("express");

const router = express.Router();

const controller = require("../Controller/controller");

router.get("/tarefas", controller.listar);
router.post("/tarefas", controller.cadastrar);

module.exports = router;