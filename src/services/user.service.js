const nano = require('nano')('http://arthur:sda1234@127.0.0.1:5984'); 
const db = nano.db.use('minardiapi'); 

// Criação de um novo usuário
const createService = async (user) => {
    const response = await db.insert(user);
    return response;
};

// Listagem de todos os usuários
const findAllService = async () => {
    const response = await db.list({ include_docs: true });
    return response.rows.map(row => row.doc);
};

// Busca de um usuário por ID
const findByIdService = async (id) => {
    const user = await db.get(id);
    return user;
};

module.exports = {
    createService,
    findAllService,
    findByIdService
};
