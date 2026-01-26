const sequelize = require('./config/database');
const productRoutes = require('./routes/products');

const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());
const adminRoutes = require('./routes/adminRoute')
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/product', productRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 8000;
//server the static file from the public directory
app.use('/upload', express.static('upload'));  //serves  files from upload folder
// sequelize.sync();
sequelize.authenticate()
    .then(() => {
        console.log('database connected..');
        app.listen(PORT, () => {
            console.log(`server run on ${PORT}`);

        })

    })
    .catch(err => {
        console.log('ERROR:' + err);

    });