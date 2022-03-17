const Disk = require('../models/diskModel');

function findAllDisks(request, response) {
  Disk.find({}, (error, disks) => {
    if (error) return response.status(500).send(`Error ${error.name}. No disks found`);
    if (!disks) return response.status(404).send('No disks were found.');
    return response.status(200).send(disks);
  });
}

function findDiskById(request, response) {
  const { diskId } = request.params;
  Disk.findById(diskId, (error, disk) => {
    if (error) return response.status(500).send({ message: `Error ${error.name}. No disks found` });
    if (!disk) return response.status(404).send({ message: 'No disks found matching the search criteria' });
    return response.status(200).send(disk);
  });
}

function addDisk(request, response) {
  const disk = new Disk(request.body);
  disk.save((error, diskData) => {
    if (error) return response.status(500).send({ message: `Error ${error.name}. Couldn't create disk` });
    if (!diskData) return response.status(404).send({ message: 'Error. Disk data can\'t be empty' });
    return response.status(200).send(disk);
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
