require('dotenv').config();

const mongoose = require('mongoose');

function connectDB() {
    //DB connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify : true,});
        
        const connection = mongoose.connection;


        connection.once('open', () => {
            console.log("Database connection successful");
        }).catch(err => {
            console.log(err,"Connection failed......");
        });

}
module.exports = connectDB;

// process.env.MONGO_CONNECTION_URL