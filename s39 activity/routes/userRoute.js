
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// import taskController from "../controllers/taskController";

router.get("/", (req, res) => {
	userController.getAllUser().then(resultFromController => res.send(
        resultFromController
    ));
})


router.post("/register", (req,res) =>{
    userController.createUser(req.body).then(resultFromController => {
        if(!resultFromController){
            return res.status(400).send("Task not found");
        }
            res.send(resultFromController)
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("Internal server error")
    });
});


router.post("/login", (req, res) => {
    const { email, password } = req.body;
    userController.authenticateUser(email, password)
        .then(user => {
            if (!user) {
                return res.status(401).send("Invalid email or password");
            }
            res.send(`Thank you for logged in.`);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal server error");
        });
});



router.delete("/:id", (req, res) => {
    userController.deleteTask(req.params.id)
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


router.put("/:id", (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;

    userController.updateTask(postId, updatedData)
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
