const express = require("express")
const router = express.Router();
const authController = require("../controllers/authControllers")

router.get("/signup", authController.handleSignupRoute);
router.get("/login", authController.handleLoginRoute);

router.post("/signup",
       authController.postSignup
);
router.post("/login", 
       authController.postLogin
);

module.exports = router;