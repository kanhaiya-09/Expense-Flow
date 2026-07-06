async function handleSignupRoute(req, res){
    res.render("auth/signup")
}
async function handleLoginRoute(req, res){
    res.render("auth/login")
}



const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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
        res.send("User Registered Successfully");
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleSignupRoute,
    handleLoginRoute,
    postSignup
}