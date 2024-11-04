const express = require("express");
const nano = require('nano')('http://arthur:sda1234@127.0.0.1:5984'); 
const app = express();

const userRoute = require("./src/routes/user.route");
const port = 5984;

// Verifica se o banco de dados existe e o conecta
const connectDatabase = async () => {
    try {
        const dbList = await nano.db.list();
        if (!dbList.includes("user_db")) {
            await nano.db.create("user_db");
            console.log("Database 'user_db' criado com sucesso!");
        } else {
            console.log("Conectado ao banco de dados 'user_db'.");
        }
    } catch (error) {
        console.error("Erro ao conectar ao CouchDB:", error.message);
    }
};

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
