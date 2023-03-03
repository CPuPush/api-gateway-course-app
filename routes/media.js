const express = require('express');
const router = express.Router();
const mediaHandler = require('./handler/media');

router.post('/', mediaHandler.create);
router.get('/', mediaHandler.getMedia);
router.delete('/:id', mediaHandler.deletebyId);

module.exports = router;
