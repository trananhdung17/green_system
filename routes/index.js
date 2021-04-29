var express = require('express');
var router = express.Router();
var mps = require('./mps');

/* GET home page. */
router.get('/', function(req, res, next) {
  var menus = [{
      path: '/mps',
      name: 'MPS',
      controller: 'AppMPS'
    }
  ]
  res.render('index', { title: 'Express', menus: menus });
});

router.use(mps);

module.exports = router;  
