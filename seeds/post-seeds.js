const { Post } = require('../models');

const postData = [{
        title: 'Title One',
        body: 'hello how are you.',
// this is where url: 'http://...' went
        user_id: 1
    },
    {
        title: 'Title Two',
        body: 'hey whats up'
        user_id: 2
    },
    {
        title: 'Another Title',
        body: 'what you up to'
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;