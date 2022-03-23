const Disk = require('../models/diskModel');

function findAllDisks(req, res) {
  Disk.find({}, (error, disks) => {
    if (error) return res.status(500).send(`Error ${error}. No disks found`);
    if (!disks) return res.status(404).send('No disks were found.');
    return res.status(200).send(disks);
  });
}

function findDiskById(req, res) {
  const { diskId } = req.params;
  Disk.findById(diskId, (error, disk) => {
    if (error) return res.status(500).send({ message: `Error ${error}. No disks found` });
    if (!disk) return res.status(404).send({ message: 'No disks found matching the search criteria' });
    return res.status(200).send(disk);
  });
}

function addDisk(req, res) {
  const disk = new Disk(req.body);
  disk.save((error, diskData) => {
    if (error) return res.status(400).send({ message: `Error ${error}. Couldn't create disk` });
    if (!disk) return res.status(404).send({ message: 'Error. Disk data can\'t be empty' });
    return res.status(200).send(diskData);
  });
}

function updateDisk(req, res) {
  const { diskId } = req.params;

  Disk.findByIdAndUpdate(diskId, req.body, (err, disk) => {
    if (err) return res.status(500).send(err.message);
    if (!disk) return res.status(404).send({ message: 'Disk couldn\'t be found' });
    return res.status(200).send({ message: `Disk ${disk} updated.` }).jsonp(disk);
  });
}

function deleteDisk(req, res) {
  const { diskId } = req.params;

  Disk.findByIdAndRemove(diskId, (err, disk) => {
    if (err) return res.status(500).send(err.message);
    if (!disk) return res.status(404).send({ message: `Disk ${disk} not found!` });
    return res.status(200).send({ message: `Disk ${disk} deleted successfully!` });
  });
}

module.exports = {
  findAllDisks,
  findDiskById,
  addDisk,
  updateDisk,
  deleteDisk,
};
