const Router = require('express');
const router = new Router();
const ContactController = require("../controller/hubspot");

router.post('/create', ContactController.create);
router.patch('/update', ContactController.update);

module.exports = router