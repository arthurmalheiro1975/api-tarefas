const Tarefa = require('../Models/tarefa');
const axios = require('axios');

exports.listar = async (req, res) => {
    try {
        const tarefas = await  Tarefa.findAll();

        return res.status(200).json(tarefas);

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar a listar"
        });
    }
};


exports.cadastrar = async (req, res) => {
    try {
        const tarefas = await Tarefa.create(req.body);

        return res.status(201).json(Tarefa);

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao criar a tarefa"
        });
    }
};