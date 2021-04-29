var express = require('express');
var ProductModel = require('../../models/product');
const { route } = require('..');
var router = express.Router();

/* GET mps page. */
router.get('/mps', function(req, res, next) {
  res.render('mps/index', { title: 'MPS' });
});

// router.get('/mps/settings')
router.get('/mps/products', function (req, res, next) {

    var products = ProductModel.search();
    var productValues = [];
    for (var i = 0; i < products.length; i++) {
        productValues.push(products[i].read());
    }
    res.render('mps/products', { "subtitle": "Products", "products": products });
});

// router.post('/mps/products/create')
// router.get('/mps/products/:productID')
// router.delete('/mps/products/:productID/delete')
// router.post('/mps/products/:productID/update')

router.get('/mps/workcenters', function (req, res, next) {
    var workcenters = [{
        id: 1,
        name: "Modulation Center"
    }, {
        id: 2,
        name: "Preparation Center"
    }, {
        id: 3,
        name: "Printing Center"
    }, {
        id: 4,
        name: "Packaging Center"
    }];
    res.render('mps/workcenters', {"subtitle": "Work Centers", "workcenters": workcenters })
});
// router.post('/mps/workcenters/create')
// router.get('/mps/workcenters/:workcenterID')
// router.delete('/mps/workcenters/:workcenterID/delete')
// router.post('/mps/workcenters/:workcenterID/update')

// router.get('/mps/replenish')
// router.post('/mps/replenish/update')
// router.post('/mps/replenish/run')
// router.get('/mps/run')

module.exports = router;
