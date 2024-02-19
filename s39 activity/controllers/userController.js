const user = require("../models/user");


module.exports.getAllUser = () => {
    return user.find({}).then(result =>{
        return result;
    })
}

module.exports.createUser = (reqBody) => {
	let newUser = new user ({
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        password: reqBody.password,
        email:reqBody.email
	})

	return newUser.save().then((user, error) => {
		if(error) {
			console.log(error);
			return false;
		} else {
			return user;
		}
	})
}
// login
module.exports.authenticateUser = () =>{
    return user.findOne()
        .then(user => {
            return user; 
        })
        .catch(error => {
            console.error(error);
            throw new Error("Authentication failed"); 
        });
}



module.exports.updateUser = (userId, updatedData) => {
    return user.findByIdAndUpdate(userId, updatedData, { new: true })
        .then((updatedUser) => {
            return updatedUser;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};


module.exports.deleteUser = (taskId) => {
    return user.findOneAndDelete({ _id: taskId })
        .then((removedUser) => {
            return removedUser;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};