const post = require("../models/post");


module.exports.getAllPost = () => {
    return post.find({}).then(result =>{
        return result;
    })
}

module.exports.createPost = (reqBody) => {
    let newPost = new post({
        title: reqBody.title,
        content: reqBody.content
    });

    return newPost.save().then((post, error) => {
        if (error) {
            console.log(error);
            return false;
        } else {
            return post;
        }
    });
};



module.exports.updatePost = (postId, updatedData) => {
    return post.findByIdAndUpdate(postId, updatedData, { new: true })
        .then((updatepost) => {
            return updatepost;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};


module.exports.deletePost = (postId) => {
    return post.findOneAndDelete({ _id: postId })
        .then((removedPost) => {
            return removedPost;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};