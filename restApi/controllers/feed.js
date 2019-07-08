module.exports.getPosts = (req, res, next) => {
    res.status(200)
        .json({posts: [{title: "Post One", content: "This is my content here"}]})
};


module.exports.createPost = (req, res, next) => {
    const title =  req.body.title;
    const content = req.body.content;
    console.log("BODUY", req.body)
    //201 successful and resource created
    res.status(201)
        .json({
            message: "Post created successfully",
            post: {id: new Date().toISOString(), title: title, content: content}
        })
};

