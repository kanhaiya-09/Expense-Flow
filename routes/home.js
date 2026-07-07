const express = require("express");
const { handleHomeRoute } = require("../controllers/homeControllers");
const router = express.Router();
const homeController = require("../controllers/homeControllers")
const { checkForAuthentication } = require("../middleware/authMiddlewares")


router.get("/", checkForAuthentication, homeController.getHomePage)

module.exports = router;