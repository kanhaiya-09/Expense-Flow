const { verifyToken } = require("../services/tokenService")

function checkForAuthentication(req, res, next){
    try{
        const token = req.cookies.token;
        if(!token){
            return redirect("/login");
        }
        const decodedUser = verifyToken(token);

        // Verify Token
        if(!decodedUser) {
            return res.redirect("/login");
        }
        
        // Attach the user to request Object
        req.user = decodedUser;

        //continue to the next middleware
        next();
    } catch (err) {
        console.log(err.message);
        return res.redirect("/login");
    }
}


module.exports = { checkForAuthentication }