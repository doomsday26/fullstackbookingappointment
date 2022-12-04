const Sequelize= require('sequelize');
const sequelize= require('../database/database');

const Patient= sequelize.define('patient',{
id:{type:Sequelize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},
name:{type:Sequelize.STRING,
allowNull:false
},
email:Sequelize.STRING

})

module.exports=Patient;