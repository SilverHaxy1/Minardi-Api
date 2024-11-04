const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connection to the database")

    mongoose.connect("mongodb+srv://arthur1:a12345678@cluster0.aujuf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

module.exports = connectDatabase;