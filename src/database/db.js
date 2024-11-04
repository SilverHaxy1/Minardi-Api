const nano = require("nano")("http://localhost:5984"); 

const connectDatabase = async () => {
    console.log("Wait connection to the database");

    try {
       
        const couchInfo = await nano.db.get('user_db'); 
        console.log("CouchDB Connected:", couchInfo);
    } catch (error) {
        console.error("CouchDB Connection Error:", error.message);

        if (error.statusCode === 404) {
            await nano.db.create('user_db');
            console.log("Database 'user_db' created!");
        }
    }
};

module.exports = connectDatabase;
