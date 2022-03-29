const User = require('../models/userModel');

function findAllUsers(req, res) {
  User.find({}, (error, users) => {
    if (error) return res.status(500).send(`Error ${error}. No users found`);
    if (!users) return res.status(404).send('No users were found.');
    return res.status(200).send(users);
  });
}

function findUserById(req, res) {
  const { userId } = req.params;
  User.findById(userId, (error, user) => {
    if (error) return res.status(400).send({ message: `Error ${error}. No users found` });
    if (!user) return res.status(404).send({ message: 'No users found matching the search criteria' });
    return res.status(200).send(user);
  });
}

function addUser(req, res) {
  const user = new User(req.body);
  user.save((error, userData) => {
    if (error) return res.status(400).send({ message: `Error ${error}. Couldn't create user` });
    if (!user) return res.status(404).send({ message: 'Error. User data can\'t be empty' });
    return res.status(200).send(userData);
  });
}

function updateUser(req, res) {
  const { userId } = req.params;

  User.findByIdAndUpdate(userId, req.body, (err, user) => {
    if (err) return res.status(500).send(err.message);
    if (!user) return res.status(404).send({ message: 'User couldn\'t be found' });
    return res.status(200).send({ message: `User ${user} updated.` });
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
