const router = require('express').Router();
const DiskCtrl = require('../controllers/diskController');

router
  .route('/')
  .get(DiskCtrl.findAllDisks)
  .post(DiskCtrl.addDisk);

router
  .route('/:id')
  .get(DiskCtrl.findDiskById)
  .put(DiskCtrl.updateDisk)
  .delete(DiskCtrl.deleteDisk);

module.exports = router;
