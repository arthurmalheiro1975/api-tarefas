const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const reserva = sequelize.define("Reserva",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    professor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    materia:{
        type:DataTypes.STRING,
        allowNull:false
    },
    data_entrega:{
     type:DataTypes.DATE,
     allowNull:false
    },
   
})

module.exports = tarefa;