const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nameEvent: {type: DataTypes.STRING, allowNull: false},
    places:  {type: DataTypes.INTEGER, allowNull: false},
    auditorium:  {type: DataTypes.STRING, allowNull: false},
    photo:  {type: DataTypes.STRING, allowNull: false},
    description:  {type: DataTypes.STRING, allowNull: false}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName:  {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING},
})


module.exports = {
    Event,
    User
  }