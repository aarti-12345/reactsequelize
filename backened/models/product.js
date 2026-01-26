const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=sequelize.define('Product',{
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    productName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ProductPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Description:{
        type:DataTypes.STRING,
        Allownull:false
        
    },
    Image:{
        type:DataTypes.STRING,
        allowNull:false

    }
})
module.exports=Product;