const express = require('express');
const Admin = require('../models/admin');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        res.status(201).json(admin);
    } catch(err) {
        res.status(400).json({ err: err.message });

    }


})
router.get('/',async(req, res) => {
    try {
        const admin =  await Admin.findAll();
        res.status(200).json(admin);

    } catch(error) {
        res.status(400).json({ error: error.message });

    }
})
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Admin.destroy({
            where: { Id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'admin deleted' })
        } else {
            res.json(400).json({ error: err.message });
        }

    }
    catch (err) {
        console.log(err);

    }

})
module.exports = router;