const User = require('../models/userModel');

function findAllUsers(request, response) {
  User.find({}, (error, users) => {
    if (error) return response.status(500).send(`Error ${error.name}. No users found`);
    if (!users) return response.status(404).send('No users were found.');
    return response.status(200).send(users);
  });
}

function findUserById(request, response) {
  const { userId } = request.params;
  User.findById(userId, (error, user) => {
    if (error) return response.status(500).send({ message: `Error ${error.name}. No users found` });
    if (!user) return response.status(404).send({ message: 'No users found matching the search criteria' });
    return response.status(200).send(user);
  });
}

function addUser(request, response) {
  const user = new User(request.body);
  user.save((error, userData) => {
    if (error) return response.status(500).send({ message: `Error ${error.name}. Couldn't create user` });
    if (!userData) return response.status(404).send({ message: 'Error. User data can\'t be empty' });
    return response.status(200).send(user);
  });
}

module.exports = {
  findAllUsers,
  findUserById,
  addUser,
};
