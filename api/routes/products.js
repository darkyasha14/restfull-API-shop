const express = require('express');
const router = express.Router();

router.get('/', (req, res , next) => {
    res.status(200).json({
        message: 'GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST requset to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id == 'special') {
        res.status(200).json({
            message: 'you discoverd the spcial ID',
            id : id
        });
    }else {
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
   res.status(200).json({
       message: 'update products'
   });
});

router.delete('/productId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product!'
    });
});

module.exports = router;