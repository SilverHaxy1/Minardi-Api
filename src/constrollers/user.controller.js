const create = (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).send({ message: "Submit all fields for registration!" });
    }


    res.status(201).send({
        message: "User created Sucessfully",
        user: {
            name, 
            username,
            email,
            password
        }
    })
};

module.exports = { create };
