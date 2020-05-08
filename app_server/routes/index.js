var express = require("express");
var router = express.Router();

const ctrllMain = require("../controllers/main");

/* GET home page. */
router.get("/", ctrllMain.index);

module.exports = router;
