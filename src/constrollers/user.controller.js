const userService = require('../services/user.service');

const create = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).send({ message: "Submit all fields for registration" });
        }

        const response = await userService.createService({ name, username, email, password });
        res.status(201).send({
            message: "User created successfully",
            user: { id: response.id, rev: response.rev, name, username, email } // mostra `id` e `rev` gerados pelo CouchDB
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();
        if (users.length === 0) {
            return res.status(404).send({ message: "No users found" });
        }

        // opcional: renomear `_id` para `id` em cada usuário retornado
        const formattedUsers = users.map(user => ({
            ...user,
            id: user._id,
            rev: user._rev,
            _id: undefined,
            _rev: undefined
        }));

        res.send(formattedUsers);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findById = async (req, res) => {
    try {
        const user = await userService.findByIdService(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // opcional: renomear `_id` para `id`
        const formattedUser = {
            ...user,
            id: user._id,
            rev: user._rev,
            _id: undefined,
            _rev: undefined
        };

        res.send(formattedUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { create, findAll, findById };
