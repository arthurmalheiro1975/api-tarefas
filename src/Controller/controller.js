const Tarefa = require('../Models/tarefa');

exports.listar = async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll();

        return res.status(200).json(tarefas);
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao listar as tarefas"
        });
    }
};

exports.cadastrar = async (req, res) => {
    try {
        const tarefa = await Tarefa.create(req.body);

        return res.status(201).json(tarefa);
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao criar a tarefa"
        });
    }
};
