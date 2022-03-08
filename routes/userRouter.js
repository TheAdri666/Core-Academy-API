const router = require('express').Router();
const UserCtrl = require('../controllers/userController');

router
  .route('/user')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

router
  .route('/user/:id')
  .get(UserCtrl.findUserById);

router.get('/', (request, response) => {
  response.send('Buenªs!');
});
