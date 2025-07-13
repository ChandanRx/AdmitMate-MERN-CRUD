const mongoose = require('mongoose')

const dbConnecion = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnecion