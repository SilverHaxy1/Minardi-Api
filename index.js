const express = require("express");
const app = express();

const userRoute = require("./src/routes/user.route")

const port = 3002;

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));


