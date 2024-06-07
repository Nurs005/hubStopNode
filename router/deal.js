const Router = require('express');
const router = new Router();
const DealControler = require('../controller/deal');

router.post("/create", DealControler.create);

module.exports = router;