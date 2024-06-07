const Router = require('express');
const router = new Router();
const contractRouter = require('./contact');
const dealRouter = require('./deal');

router.use("/contact", contractRouter);
router.use("/deal", dealRouter);

module.exports = router;