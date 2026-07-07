async function handleSignupRoute(req, res){
    res.render("auth/signup")
}
async function handleLoginRoute(req, res){
    res.render("auth/login")
}


// Bcrypt import
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// Service Token Import
const { generateToken, verifyToken } = require("../services/tokenService") 

async function postSignup(req, res){
    try{    
        const { fullname, email, password } = req.body; //EXtraction
        
        const hashedPassword = await bcrypt.hash(password, 10) 

        if(!fullname || !email || !password){
            return res.status(400).send("All fields are required");
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(409).send("User already exists");
        }


        //bcrypt.hash() function return a promise. So, awiat is compulsory 
        const user = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await user.save();
        return res.send("User Registered Successfully");
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
}

// JWT Require
const { setUSer } = require("../services/tokenService")


async function postLogin(req, res){
    try{
        const { email, password } = req.body;

        //Validation
        if(!email || !password){
            return res.status(400).send("All fields are required");
        }

        // Find User
        const user = await User.findOne({ email });

        if(!user){
            return res.send("Invalid Email or Password");
        }

        // Compare Password
        const isMatch = bcrypt.compare(password,
            user.password
        );

        if(!isMatch){
            return res.status(401).send("Invalid Email or Password");
        }

        // Generate JWT
        const token = generateToken(user)
        res.cookie("token", token)
        return res.redirect("/");

    } catch (err) {
        console.log(err.message)
        return res.status(500).send("Internal Server Error")
    }
}


// Logout
async function handleLogout(req, res){
    res.clearCookie("token");
    return res.redirect("/login");
}

module.exports = {
    handleSignupRoute,
    handleLoginRoute,
    postSignup,
    postLogin,
    handleLogout,
}