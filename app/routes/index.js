let express = require("express");
let router = express.Router();

let portfolioController = require("../controllers/portfolio");

/* GET home page. */
router.get("/", portfolioController.home);
router.get("/about", portfolioController.about);
router.get("/services", portfolioController.services);
router.get("/projects", portfolioController.projects);

module.exports = router;
