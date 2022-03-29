const router = require('express').Router();
const UserCtrl = require('../controllers/userController');

router
  .route('/')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

router
  .route('/:id')
  .get(UserCtrl.findUserById)
  .put(UserCtrl.updateUser)
  .delete(UserCtrl.deleteUser);

module.exports = router;
