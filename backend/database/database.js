const Sequelize = require('sequelize');
const sequelize= new Sequelize('bookingappointment','root','harsh226748',{
    dialect:'mysql',host:'localhost'
})
module.exports=sequelize;