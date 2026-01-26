const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Admin = sequelize.define('Admin', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    Name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }

})


module.exports = Admin;
