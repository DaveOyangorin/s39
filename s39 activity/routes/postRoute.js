
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");


router.get("/", (req, res) => {
	postController.getAllPost().then(resultFromController => res.send(
        resultFromController
    ));
})


router.post("/", (req, res) => {
    postController.createPost(req.body).then(resultFromController => {
        if (!resultFromController) {
            return res.status(400).send("Failed to create post");
        }
        res.send(resultFromController);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("Internal server error");
    });
});


router.delete("/:id", (req, res) => {
    postController.deleteTask(req.params.id)
        .then(resultFromController => {
            if (!resultFromController) {
                return res.status(404).send("Task not found");
            }
            res.send(resultFromController);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
});


router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;

    postController.updatePost(postId, updatedData)
        .then(updatedPost => {
            if (!updatedPost) {
                return res.status(404).send("Task not found");
            }
            res.send(updatedPost);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
});

module.exports = router;
