const User = require('../model/user');


exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                title: "book1",
                content: "content1",
            },
        ],
    })
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: "Created succesfully!",
        post: {title: title, content: content}
    });
}

exports.getAllUsers = (req, res) => {
    User.getUsers((err, users) => {
    if (err) {
        console.error('Error fetching users from MySQL:', err);
        res.status(500).json({ error: 'Could not retrieve users.' });
    } else {
        res.json(users);
    }
    });
}

exports.createUsers = (req, result) => {
    const name = req.body.name;
    User.createUser(name, (err, res) => {
        if(err){
            result.json({
                error: "Error happen" + err,
            })
        }else{
            result.json({
                message: "Created!",
                user: {
                    name: name,
                }
            })
        }
    });
}
