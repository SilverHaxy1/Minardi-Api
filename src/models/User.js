const nano = require("nano")("http://localhost:5984");
const userDb = nano.db.use("minardiapi"); 
const createUser = async (userData) => {
    try {
        const response = await userDb.insert(userData);
        return { id: response.id, ...userData };
    } catch (error) {
        throw new Error("Error creating user: " + error.message);
    }
};

const findAllUsers = async () => {
    try {
        const response = await userDb.list({ include_docs: true });
        return response.rows.map(row => row.doc); 
    } catch (error) {
        throw new Error("Error retrieving users: " + error.message);
    }
};

const findUserById = async (id) => {
    try {
        const user = await userDb.get(id);
        return user;
    } catch (error) {
        if (error.statusCode === 404) {
            throw new Error("User not found");
        }
        throw new Error("Error retrieving user: " + error.message);
    }
};

module.exports = { createUser, findAllUsers, findUserById };
