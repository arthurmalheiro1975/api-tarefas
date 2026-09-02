const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const tarefa = sequelize.define("Tarefa", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    professor: {
        type: DataTypes.STRING,
        allowNull: false
    },

    materia: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_entrega: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = tarefa
