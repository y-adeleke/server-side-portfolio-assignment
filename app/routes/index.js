/*
  Student name: Yusuf Adeleke
  Student id: 301114414
  Date: Sept 30 2023
*/

let express = require("express");
let router = express.Router();

let portfolioController = require("../controllers/portfolio");

/* GET home page. */
router.get("/", portfolioController.home);
router.get("/about", portfolioController.about);
router.get("/services", portfolioController.services);
router.get("/projects", portfolioController.projects);
router.get("/contact", portfolioController.contact);
router.post("/process-form", portfolioController.submitAboutForm);

module.exports = router;
