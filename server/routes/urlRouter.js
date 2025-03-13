const express = require('express');
const router = express.Router();
const UrlController = require('../controllers/urlController');

router.post('/shorten', UrlController.shortenUrl);
router.get('/:code', UrlControllet.redirectUrl);

module.exports = router;
