const mongoose = require("mongoose")

async function connectMongoDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully");
        console.log("Database:", mongoose.connection.name)
    } catch(err) {
        console.log("Database connection failed.")
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectMongoDB;