const mongoose = require('mongoose');


const connectDB = async() => {
    try{
        await mongoose.connect(process.env.db);
        console.log('database connecte');
    }
    catch (error){
        console.error(error);
    }
};
module.exports = connectDB;
