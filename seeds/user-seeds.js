
const { User } = require('../models');

const userData = [{
        username: 'Matheus',
        email: 'Matheus@example.com',
        password: 'hello'
    },
    {
        username: 'sophie',
        email: 'sophie@example.com',
        password: 'hello'
    },
    {
        username: 'jef',
        email: 'jef@example.com',
        password: 'yo'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;