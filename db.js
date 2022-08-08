const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.NEW_DB_URL, connectionParams);
        console.log("connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("couldn't connect to database");
    }
}