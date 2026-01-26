
const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})
const upload = multer({ storage: storage });
router.post('/', upload.single('Image'), async (req, res) => {
    try {
        const { productName, ProductPrice, ProductQuantity, Description } = req.body;
        const Image = req.file.path;
        const add = {
            productName,
            ProductPrice,
            ProductQuantity,
            Description,
            Image: Image
        }
        const data = await Product.create(add);
        res.status(201).json(data);

    } catch (err) {
        res.status(400).json({ error: err.message });

    }
})

router.get('/', async (req, res) => {
    try {
        const product = await Product.findAll();
        console.log(product)
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Use 'error' instead of 'err'
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Product.destroy({
            where: { Id: req.params.id }
        });


        if (deleted) {
            res.status(204).json({ message: 'product deleted' })
        }
        else {
            res.status(404).json({ error: 'product not found' })
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

// router.put('/:id', async (req, res) => {
//     try {
//         const updated = await Product.update({
//             where: { Id: req.params.id }
//         });
//         if (updated) {
//             res.status(204).json({ message: 'product edited' })
//         }
//         else {
//             res.status(400).json({ error: 'not found' })
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// })
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { productName, ProductPrice, ProductQuantity, Description } = req.body;

        const [updated] = await Product.update(
            { productName, ProductPrice, ProductQuantity, Description },
            { where: { Id: id } } // must match column name
        );

        if (updated > 0) {
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
