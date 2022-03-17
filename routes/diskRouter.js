const router = require('express').Router();
const DiskCtrl = require('../controllers/diskController');

router
  .route('/disk')
  .get(DiskCtrl.findAllDisks)
  .post(DiskCtrl.addDisk);

router
  .route('/disk/:id')
  .get(DiskCtrl.findDiskById)
  .put(DiskCtrl.updateDisk)
  .delete(DiskCtrl.deleteDisk);
