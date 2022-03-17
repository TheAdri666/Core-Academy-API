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

function updateUser(req, res) {
  const { userId } = req.params;

  User.findByIdAndUpdate(userId, req.body, (err, user) => {
    if (err) return res.status(500).send(err.message);
    if (!user) return res.status(404).send({ message: 'User couldn\'t be found' });
    return res.status(200).send({ message: `User ${user} updated.` }).jsonp(user);
  });
}

function deleteUser(req, res) {
  const { userId } = req.params;

  User.findByIdAndRemove(userId, (err, user) => {
    if (err) return res.status(500).send(err.message);
    if (!user) return res.status(404).send({ message: `User ${user} not found!` });
    return res.status(200).send({ message: `User ${user} deleted successfully!` });
  });
}

module.exports = {
  findAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
};
